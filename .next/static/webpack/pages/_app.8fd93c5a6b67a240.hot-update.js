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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   addUserAsync: function() { return /* binding */ addUserAsync; },\n/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },\n/* harmony export */   fetchUserAsync: function() { return /* binding */ fetchUserAsync; },\n/* harmony export */   updateUser: function() { return /* binding */ updateUser; },\n/* harmony export */   updateUserAsync: function() { return /* binding */ updateUserAsync; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst initialState = {\n    user: []\n};\nconst UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.user.push(action.payload);\n            console.log(action.payload);\n            return {\n                user\n            };\n        },\n        fetchUser: (state, action)=>{\n            return {\n                ...state,\n                user: action.payload\n            }; // Replace the state with new data\n        },\n        updateUser: (state, action)=>{\n            state.user.push(action.payload);\n            return {\n                user\n            };\n        }\n    }\n});\nconst { addUser, fetchUser, updateUser } = UserSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSlice.reducer);\n// Async action creator for post data\nconst addUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n// Async action creator for fetch data\nconst fetchUserAsync = ()=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"));\n            const userData = response.data;\n            dispatch(fetchUser(userData)); // Dispatch the action with the fetched data\n        } catch (err) {\n            console.log(\"Fetch User Error :\", err);\n        }\n    };\n// Async action creator for post data\nconst updateUserAsync = (id, userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patch(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDckI7QUFFMUIsTUFBTUUsZUFBZTtJQUNuQkMsTUFBTSxFQUFFO0FBQ1Y7QUFFQSxNQUFNQyxZQUFZSiw2REFBV0EsQ0FBQztJQUM1QkssTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1JDLFNBQVMsQ0FBQ0MsT0FBT0M7WUFDZkQsTUFBTUwsSUFBSSxDQUFDTyxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osT0FBT0UsT0FBTztZQUMxQixPQUFPO2dCQUFFUjtZQUFLO1FBQ2hCO1FBQ0FXLFdBQVcsQ0FBQ04sT0FBT0M7WUFDakIsT0FBTztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTCxNQUFNTSxPQUFPRSxPQUFPO1lBQUMsR0FBRyxrQ0FBa0M7UUFDL0U7UUFDQUksWUFBWSxDQUFDUCxPQUFPQztZQUNsQkQsTUFBTUwsSUFBSSxDQUFDTyxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUIsT0FBTztnQkFBRVI7WUFBSztRQUNoQjtJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUVJLE9BQU8sRUFBRU8sU0FBUyxFQUFFQyxVQUFVLEVBQUUsR0FBR1gsVUFBVVksT0FBTyxDQUFDO0FBQ3BFLCtEQUFlWixVQUFVYSxPQUFPLEVBQUM7QUFFakMscUNBQXFDO0FBRTlCLE1BQU1DLGVBQWUsQ0FBQ0MsV0FBYSxPQUFPQztRQUMvQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNcEIsa0RBQVUsQ0FDL0IsR0FBbUMsT0FBaENzQiwyQkFBK0IsRUFBQyxpQkFDbkNKO1lBR0YsTUFBTU8sWUFBWUwsU0FBU00sSUFBSTtZQUUvQlAsU0FBU2IsUUFBUW1CLGFBQWEsOEJBQThCO1FBQzlELEVBQUUsT0FBT0UsS0FBSztZQUNaaEIsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmU7UUFDbEM7SUFDRixFQUFFO0FBRUYsc0NBQXNDO0FBRS9CLE1BQU1DLGlCQUFpQixJQUFNLE9BQU9UO1FBQ3pDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQixpREFBUyxDQUM5QixHQUFtQyxPQUFoQ3NCLDJCQUErQixFQUFDO1lBRXJDLE1BQU1KLFdBQVdFLFNBQVNNLElBQUk7WUFDOUJQLFNBQVNOLFVBQVVLLFlBQVksNENBQTRDO1FBQzdFLEVBQUUsT0FBT1MsS0FBSztZQUNaaEIsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQmU7UUFDcEM7SUFDRixFQUFFO0FBRUYscUNBQXFDO0FBRTlCLE1BQU1HLGtCQUFrQixDQUFDQyxJQUFJYixXQUFhLE9BQU9DO1FBQ3RELElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQixtREFBVyxDQUNoQyxHQUFtQyxPQUFoQ3NCLDJCQUErQixFQUFDLGlCQUNuQ0o7WUFHRixNQUFNTyxZQUFZTCxTQUFTTSxJQUFJO1lBRS9CUCxTQUFTYixRQUFRbUIsYUFBYSw4QkFBOEI7UUFDOUQsRUFBRSxPQUFPRSxLQUFLO1lBQ1poQixRQUFRQyxHQUFHLENBQUMsb0JBQW9CZTtRQUNsQztJQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc2xpY2UvVXNlclNsaWNlLmpzP2Q5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCBVc2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHJldHVybiB7IHVzZXIgfTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9OyAvLyBSZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIG5ldyBkYXRhXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlci5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFVzZXIsIGZldGNoVXNlciwgdXBkYXRlVXNlciB9ID0gVXNlclNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTbGljZS5yZWR1Y2VyO1xyXG5cclxuLy8gQXN5bmMgYWN0aW9uIGNyZWF0b3IgZm9yIHBvc3QgZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJBc3luYyA9ICh1c2VyRGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci9yb3V0ZXNgLFxyXG4gICAgICB1c2VyRGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhZGRlZFVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGRpc3BhdGNoKGFkZFVzZXIoYWRkZWRVc2VyKSk7IC8vIEFkZCB0aGUgdXNlciB0byBSZWR1eCBTdG9yZVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJBZGQgVXNlciBFcnJvciA6XCIsIGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQXN5bmMgYWN0aW9uIGNyZWF0b3IgZm9yIGZldGNoIGRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJBc3luYyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci9yb3V0ZXNgXHJcbiAgICApO1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgZGlzcGF0Y2goZmV0Y2hVc2VyKHVzZXJEYXRhKSk7IC8vIERpc3BhdGNoIHRoZSBhY3Rpb24gd2l0aCB0aGUgZmV0Y2hlZCBkYXRhXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZldGNoIFVzZXIgRXJyb3IgOlwiLCBlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEFzeW5jIGFjdGlvbiBjcmVhdG9yIGZvciBwb3N0IGRhdGFcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyQXN5bmMgPSAoaWQsIHVzZXJEYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci9yb3V0ZXNgLFxyXG4gICAgICB1c2VyRGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhZGRlZFVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGRpc3BhdGNoKGFkZFVzZXIoYWRkZWRVc2VyKSk7IC8vIEFkZCB0aGUgdXNlciB0byBSZWR1eCBTdG9yZVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJBZGQgVXNlciBFcnJvciA6XCIsIGVycik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJVc2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXIiLCJ1cGRhdGVVc2VyIiwiYWN0aW9ucyIsInJlZHVjZXIiLCJhZGRVc2VyQXN5bmMiLCJ1c2VyRGF0YSIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJhZGRlZFVzZXIiLCJkYXRhIiwiZXJyIiwiZmV0Y2hVc2VyQXN5bmMiLCJnZXQiLCJ1cGRhdGVVc2VyQXN5bmMiLCJpZCIsInBhdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/slice/UserSlice.js\n"));

/***/ })

});