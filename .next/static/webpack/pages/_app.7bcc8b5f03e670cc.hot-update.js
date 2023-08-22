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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   addUserAsync: function() { return /* binding */ addUserAsync; },\n/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },\n/* harmony export */   fetchUserAsync: function() { return /* binding */ fetchUserAsync; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst initialState = {\n    user: []\n};\nconst UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.user.push(action.payload);\n            console.log(action.payload);\n            return {\n                user\n            };\n        },\n        fetchUser: (state, action)=>{\n            return {\n                ...state,\n                user: action.payload\n            }; // Replace the state with new data\n        }\n    }\n});\nconst { addUser, fetchUser } = UserSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSlice.reducer);\n// Async action creator for post data\nconst addUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n// Async action creator for post data\nconst fetchUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ3JCO0FBRTFCLE1BQU1FLGVBQWU7SUFDbkJDLE1BQU0sRUFBRTtBQUNWO0FBRUEsTUFBTUMsWUFBWUosNkRBQVdBLENBQUM7SUFDNUJLLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxTQUFTLENBQUNDLE9BQU9DO1lBQ2ZELE1BQU1MLElBQUksQ0FBQ08sSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1lBQzlCQyxRQUFRQyxHQUFHLENBQUNKLE9BQU9FLE9BQU87WUFDMUIsT0FBTztnQkFBRVI7WUFBSztRQUNoQjtRQUNBVyxXQUFXLENBQUNOLE9BQU9DO1lBQ2pCLE9BQU87Z0JBQUUsR0FBR0QsS0FBSztnQkFBRUwsTUFBTU0sT0FBT0UsT0FBTztZQUFDLEdBQUcsa0NBQWtDO1FBQy9FO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUosT0FBTyxFQUFFTyxTQUFTLEVBQUUsR0FBR1YsVUFBVVcsT0FBTyxDQUFDO0FBQ3hELCtEQUFlWCxVQUFVWSxPQUFPLEVBQUM7QUFFakMscUNBQXFDO0FBRTlCLE1BQU1DLGVBQWUsQ0FBQ0MsV0FBYSxPQUFPQztRQUMvQyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsa0RBQVUsQ0FDL0IsR0FBbUMsT0FBaENxQiwyQkFBK0IsRUFBQyxpQkFDbkNKO1lBR0YsTUFBTU8sWUFBWUwsU0FBU00sSUFBSTtZQUUvQlAsU0FBU1osUUFBUWtCLGFBQWEsOEJBQThCO1FBQzlELEVBQUUsT0FBT0UsS0FBSztZQUNaZixRQUFRQyxHQUFHLENBQUMsb0JBQW9CYztRQUNsQztJQUNGLEVBQUU7QUFFRixxQ0FBcUM7QUFFOUIsTUFBTUMsaUJBQWlCLENBQUNWLFdBQWEsT0FBT0M7UUFDakQsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTW5CLGtEQUFVLENBQy9CLEdBQW1DLE9BQWhDcUIsMkJBQStCLEVBQUMsaUJBQ25DSjtZQUdGLE1BQU1PLFlBQVlMLFNBQVNNLElBQUk7WUFFL0JQLFNBQVNaLFFBQVFrQixhQUFhLDhCQUE4QjtRQUM5RCxFQUFFLE9BQU9FLEtBQUs7WUFDWmYsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmM7UUFDbEM7SUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3NsaWNlL1VzZXJTbGljZS5qcz9kOWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgVXNlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlclwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlci5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICByZXR1cm4geyB1c2VyIH07XHJcbiAgICB9LFxyXG4gICAgZmV0Y2hVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTsgLy8gUmVwbGFjZSB0aGUgc3RhdGUgd2l0aCBuZXcgZGF0YVxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFVzZXIsIGZldGNoVXNlciB9ID0gVXNlclNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTbGljZS5yZWR1Y2VyO1xyXG5cclxuLy8gQXN5bmMgYWN0aW9uIGNyZWF0b3IgZm9yIHBvc3QgZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFVzZXJBc3luYyA9ICh1c2VyRGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vdXNlci9yb3V0ZXNgLFxyXG4gICAgICB1c2VyRGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhZGRlZFVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGRpc3BhdGNoKGFkZFVzZXIoYWRkZWRVc2VyKSk7IC8vIEFkZCB0aGUgdXNlciB0byBSZWR1eCBTdG9yZVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2coXCJBZGQgVXNlciBFcnJvciA6XCIsIGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQXN5bmMgYWN0aW9uIGNyZWF0b3IgZm9yIHBvc3QgZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckFzeW5jID0gKHVzZXJEYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2VyL3JvdXRlc2AsXHJcbiAgICAgIHVzZXJEYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFkZGVkVXNlciA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgZGlzcGF0Y2goYWRkVXNlcihhZGRlZFVzZXIpKTsgLy8gQWRkIHRoZSB1c2VyIHRvIFJlZHV4IFN0b3JlXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFkZCBVc2VyIEVycm9yIDpcIiwgZXJyKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsIlVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImFkZFVzZXIiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImZldGNoVXNlciIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiYWRkVXNlckFzeW5jIiwidXNlckRhdGEiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYWRkZWRVc2VyIiwiZGF0YSIsImVyciIsImZldGNoVXNlckFzeW5jIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/slice/UserSlice.js\n"));

/***/ })

});