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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   addUserAsync: function() { return /* binding */ addUserAsync; },\n/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },\n/* harmony export */   fetchUserAsync: function() { return /* binding */ fetchUserAsync; },\n/* harmony export */   updateUser: function() { return /* binding */ updateUser; },\n/* harmony export */   updateUserAsync: function() { return /* binding */ updateUserAsync; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst initialState = {\n    user: []\n};\nconst UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.user.push(action.payload);\n            console.log(action.payload);\n            return {\n                user\n            };\n        },\n        fetchUser: (state, action)=>{\n            return {\n                ...state,\n                user: action.payload\n            }; // Replace the state with new data\n        },\n        updateUser: (state, action)=>{\n            state.user.push(action.payload);\n            return {\n                user\n            };\n        },\n        fetchPerUser: (state, action)=>{\n            return {\n                ...state,\n                permember: action.payload\n            }; // Replace the state with new data\n        }\n    }\n});\nconst { addUser, fetchUser, updateUser } = UserSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSlice.reducer);\n// Async action creator for post data\nconst addUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n// Async action creator for fetch data\nconst fetchUserAsync = ()=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"));\n            const userData = response.data;\n            dispatch(fetchUser(userData)); // Dispatch the action with the fetched data\n        } catch (err) {\n            console.log(\"Fetch User Error :\", err);\n        }\n    };\n// Async action creator for update data\nconst updateUserAsync = (id, userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patch(\"\".concat(\"http://localhost:3000/api\", \"/user/\").concat(id), userData);\n            const updatedUser = response.data;\n            dispatch(updateUser(updatedUser)); // Update the user to Redux Store\n        } catch (err) {\n            console.log(\"Update User Error :\", err);\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDckI7QUFFMUIsTUFBTUUsZUFBZTtJQUNuQkMsTUFBTSxFQUFFO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZSiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFNBQVMsQ0FBQ0MsT0FBT0M7WUFDZkQsTUFBTUwsSUFBSSxDQUFDTyxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osT0FBT0UsT0FBTztZQUMxQixPQUFPO2dCQUFFUjtZQUFLO1FBQ2hCO1FBQ0FXLFdBQVcsQ0FBQ04sT0FBT0M7WUFDakIsT0FBTztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTCxNQUFNTSxPQUFPRSxPQUFPO1lBQUMsR0FBRyxrQ0FBa0M7UUFDL0U7UUFDQUksWUFBWSxDQUFDUCxPQUFPQztZQUNsQkQsTUFBTUwsSUFBSSxDQUFDTyxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUIsT0FBTztnQkFBRVI7WUFBSztRQUNoQjtRQUNBYSxjQUFjLENBQUNSLE9BQU9DO1lBQ3BCLE9BQU87Z0JBQUUsR0FBR0QsS0FBSztnQkFBRVMsV0FBV1IsT0FBT0UsT0FBTztZQUFDLEdBQUcsa0NBQWtDO1FBQ3BGO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUosT0FBTyxFQUFFTyxTQUFTLEVBQUVDLFVBQVUsRUFBRSxHQUFHWCxVQUFVYyxPQUFPLENBQUM7QUFDcEUsK0RBQWVkLFVBQVVlLE9BQU8sRUFBQztBQUVqQyxxQ0FBcUM7QUFFOUIsTUFBTUMsZUFBZSxDQUFDQyxXQUFhLE9BQU9DO1FBQy9DLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU10QixrREFBVSxDQUMvQixHQUFtQyxPQUFoQ3dCLDJCQUErQixFQUFDLGlCQUNuQ0o7WUFHRixNQUFNTyxZQUFZTCxTQUFTTSxJQUFJO1lBRS9CUCxTQUFTZixRQUFRcUIsYUFBYSw4QkFBOEI7UUFDOUQsRUFBRSxPQUFPRSxLQUFLO1lBQ1psQixRQUFRQyxHQUFHLENBQUMsb0JBQW9CaUI7UUFDbEM7SUFDRixFQUFFO0FBRUYsc0NBQXNDO0FBRS9CLE1BQU1DLGlCQUFpQixJQUFNLE9BQU9UO1FBQ3pDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU10QixpREFBUyxDQUM5QixHQUFtQyxPQUFoQ3dCLDJCQUErQixFQUFDO1lBRXJDLE1BQU1KLFdBQVdFLFNBQVNNLElBQUk7WUFDOUJQLFNBQVNSLFVBQVVPLFlBQVksNENBQTRDO1FBQzdFLEVBQUUsT0FBT1MsS0FBSztZQUNabEIsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQmlCO1FBQ3BDO0lBQ0YsRUFBRTtBQUVGLHVDQUF1QztBQUVoQyxNQUFNRyxrQkFBa0IsQ0FBQ0MsSUFBSWIsV0FBYSxPQUFPQztRQUN0RCxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNdEIsbURBQVcsQ0FDaEMsR0FBMkNpQyxPQUF4Q1QsMkJBQStCLEVBQUMsVUFBVyxPQUFIUyxLQUMzQ2I7WUFHRixNQUFNZSxjQUFjYixTQUFTTSxJQUFJO1lBRWpDUCxTQUFTUCxXQUFXcUIsZUFBZSxpQ0FBaUM7UUFDdEUsRUFBRSxPQUFPTixLQUFLO1lBQ1psQixRQUFRQyxHQUFHLENBQUMsdUJBQXVCaUI7UUFDckM7SUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3NsaWNlL1VzZXJTbGljZS5qcz9kOWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgVXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlci5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICByZXR1cm4geyB1c2VyIH07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTsgLy8gUmVwbGFjZSB0aGUgc3RhdGUgd2l0aCBuZXcgZGF0YVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHJldHVybiB7IHVzZXIgfTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFBlclVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwZXJtZW1iZXI6IGFjdGlvbi5wYXlsb2FkIH07IC8vIFJlcGxhY2UgdGhlIHN0YXRlIHdpdGggbmV3IGRhdGFcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRVc2VyLCBmZXRjaFVzZXIsIHVwZGF0ZVVzZXIgfSA9IFVzZXJTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyU2xpY2UucmVkdWNlcjtcclxuXHJcbi8vIEFzeW5jIGFjdGlvbiBjcmVhdG9yIGZvciBwb3N0IGRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRVc2VyQXN5bmMgPSAodXNlckRhdGEpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXIvcm91dGVzYCxcclxuICAgICAgdXNlckRhdGFcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYWRkZWRVc2VyID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBkaXNwYXRjaChhZGRVc2VyKGFkZGVkVXNlcikpOyAvLyBBZGQgdGhlIHVzZXIgdG8gUmVkdXggU3RvcmVcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWRkIFVzZXIgRXJyb3IgOlwiLCBlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEFzeW5jIGFjdGlvbiBjcmVhdG9yIGZvciBmZXRjaCBkYXRhXHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyQXN5bmMgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXIvcm91dGVzYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlcih1c2VyRGF0YSkpOyAvLyBEaXNwYXRjaCB0aGUgYWN0aW9uIHdpdGggdGhlIGZldGNoZWQgZGF0YVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJGZXRjaCBVc2VyIEVycm9yIDpcIiwgZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBBc3luYyBhY3Rpb24gY3JlYXRvciBmb3IgdXBkYXRlIGRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQXN5bmMgPSAoaWQsIHVzZXJEYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci8ke2lkfWAsXHJcbiAgICAgIHVzZXJEYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRVc2VyID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKHVwZGF0ZWRVc2VyKSk7IC8vIFVwZGF0ZSB0aGUgdXNlciB0byBSZWR1eCBTdG9yZVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJVcGRhdGUgVXNlciBFcnJvciA6XCIsIGVycik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJVc2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXIiLCJ1cGRhdGVVc2VyIiwiZmV0Y2hQZXJVc2VyIiwicGVybWVtYmVyIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJhZGRVc2VyQXN5bmMiLCJ1c2VyRGF0YSIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhZGRlZFVzZXIiLCJkYXRhIiwiZXJyIiwiZmV0Y2hVc2VyQXN5bmMiLCJnZXQiLCJ1cGRhdGVVc2VyQXN5bmMiLCJpZCIsInBhdGNoIiwidXBkYXRlZFVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slice/UserSlice.js\n"));

/***/ })

});