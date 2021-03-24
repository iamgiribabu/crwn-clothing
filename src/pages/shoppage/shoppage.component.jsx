import React from 'react';
import {Route } from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import {updateCollections} from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading : true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collection');
        
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap); //Data added to Reducer
            this.setState({ loading : false });
        })
        

    } 

    render(){
        const { loading } = this.state ;
        const {match} = this.props;
        return(
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render = {(props) => <CollectionOverviewWithSpinner isLoading = {loading} {...props} />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render = {(props) => <CollectionPageWithSpinner isLoading = {loading} {...props} /> } 
                />
            </div>
        )
    }
} 

// adding data to redux
const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})
    

export default connect(null, mapDispatchToProps)(ShopPage);