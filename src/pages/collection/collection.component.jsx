import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({match}) => {
    console.log('--------------------------');
    console.log(match);
    console.log(match.params.categoryId);
    return (
        <div className='category'>
            <h2>Category page</h2>
            
        </div>
    )
}
export default CollectionPage;
