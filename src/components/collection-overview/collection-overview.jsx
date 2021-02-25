import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.styles.scss';
import CollectionPreview from '../preview-component/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selectors';



const CollectionOverview = ({collections}) => {
    
    return (

        <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            )) 
        }
        </div>

    )
}

const mapStateToProps = createStructuredSelector ({
    collections : selectCollections
})

export default connect(mapStateToProps)(CollectionOverview)
