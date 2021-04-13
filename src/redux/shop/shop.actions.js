import ShopActionTypes from './shop.types'
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_START,
   
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload : collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type : fetchCollectionsFailure,
    payload : errorMessage
})

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collection');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
//             dispatch(fetchCollectionsSuccess(collectionsMap));           //Data added to Reducer
            
//         }).catch(error => dispatch(fetchCollectionsFailure(error)))
//     }
// }