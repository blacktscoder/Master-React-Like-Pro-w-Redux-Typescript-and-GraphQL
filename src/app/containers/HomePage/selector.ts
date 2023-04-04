import { createSelector } from "reselect";

const selectHomePage = (state: any) => state.homePage;

export const makeSelectAnimePage = createSelector(selectHomePage, (homePage) => homePage.animePage);
