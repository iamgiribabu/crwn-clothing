
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview  from './collection-overview'
import {compose} from 'redux'



const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching,
    
});



const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)



export default CollectionsOverviewContainer;
