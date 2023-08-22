"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/slice/UserSlice.js":
/*!**********************************!*\
  !*** ./store/slice/UserSlice.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   addUserAsync: function() { return /* binding */ addUserAsync; },\n/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst initialState = {\n    user: []\n};\nconst UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.user.push(action.payload);\n            console.log(action.payload);\n            return {\n                user\n            };\n        },\n        fetchUser: (state, action)=>{\n            return {\n                ...state,\n                user: action.payload\n            }; // Replace the state with new data\n        }\n    }\n});\nconst { addUser, fetchUser } = UserSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSlice.reducer);\n// Async action creator for post data\nconst addUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDckI7QUFFMUIsTUFBTUUsZUFBZTtJQUNuQkMsTUFBTSxFQUFFO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZSiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFNBQVMsQ0FBQ0MsT0FBT0M7WUFDZkQsTUFBTUwsSUFBSSxDQUFDTyxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osT0FBT0UsT0FBTztZQUMxQixPQUFPO2dCQUFFUjtZQUFLO1FBQ2hCO1FBQ0FXLFdBQVcsQ0FBQ04sT0FBT0M7WUFDakIsT0FBTztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTCxNQUFNTSxPQUFPRSxPQUFPO1lBQUMsR0FBRyxrQ0FBa0M7UUFDL0U7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSixPQUFPLEVBQUVPLFNBQVMsRUFBRSxHQUFHVixVQUFVVyxPQUFPLENBQUM7QUFDeEQsK0RBQWVYLFVBQVVZLE9BQU8sRUFBQztBQUVqQyxxQ0FBcUM7QUFFOUIsTUFBTUMsZUFBZSxDQUFDQyxXQUFhLE9BQU9DO1FBQy9DLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1uQixrREFBVSxDQUMvQixHQUFtQyxPQUFoQ3FCLDJCQUErQixFQUFDLGlCQUNuQ0o7WUFHRixNQUFNTyxZQUFZTCxTQUFTTSxJQUFJO1lBRS9CUCxTQUFTWixRQUFRa0IsYUFBYSw4QkFBOEI7UUFDOUQsRUFBRSxPQUFPRSxLQUFLO1lBQ1pmLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JjO1FBQ2xDO0lBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanM/ZDlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBbXSxcclxufTtcclxuXHJcbmNvbnN0IFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGFkZFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gICAgfSxcclxuICAgIGZldGNoVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07IC8vIFJlcGxhY2UgdGhlIHN0YXRlIHdpdGggbmV3IGRhdGFcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRVc2VyLCBmZXRjaFVzZXIgfSA9IFVzZXJTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlcjtcclxuXHJcbi8vIEFzeW5jIGFjdGlvbiBjcmVhdG9yIGZvciBwb3N0IGRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQXN5bmMgPSAodXNlckRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXIvcm91dGVzYCxcclxuICAgICAgdXNlckRhdGFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWRkZWRVc2VyID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBkaXNwYXRjaChhZGRVc2VyKGFkZGVkVXNlcikpOyAvLyBBZGQgdGhlIHVzZXIgdG8gUmVkdXggU3RvcmVcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWRkIFVzZXIgRXJyb3IgOlwiLCBlcnIpO1xyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYXhpb3MiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiVXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVXNlciIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJhZGRVc2VyQXN5bmMiLCJ1c2VyRGF0YSIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhZGRlZFVzZXIiLCJkYXRhIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/slice/UserSlice.js\n"));

/***/ })

});