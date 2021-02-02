import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser], // if we hve multipe selector input then instead of using array we can make them as different argument respectively like selectUser, selectCart instead of [ selectUser, selectCart]
    (user) => user.currentUser
)

