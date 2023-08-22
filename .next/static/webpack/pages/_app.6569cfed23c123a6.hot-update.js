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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   addUserAsync: function() { return /* binding */ addUserAsync; },\n/* harmony export */   fetchPerUser: function() { return /* binding */ fetchPerUser; },\n/* harmony export */   fetchPerUserAsync: function() { return /* binding */ fetchPerUserAsync; },\n/* harmony export */   fetchUser: function() { return /* binding */ fetchUser; },\n/* harmony export */   fetchUserAsync: function() { return /* binding */ fetchUserAsync; },\n/* harmony export */   updateUser: function() { return /* binding */ updateUser; },\n/* harmony export */   updateUserAsync: function() { return /* binding */ updateUserAsync; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\nconst initialState = {\n    user: [],\n    peruser: []\n};\nconst UserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            state.user.push(action.payload);\n            console.log(action.payload);\n            return {\n                user\n            };\n        },\n        fetchUser: (state, action)=>{\n            return {\n                ...state,\n                user: action.payload\n            }; // Replace the state with new data\n        },\n        updateUser: (state, action)=>{\n            state.user.push(action.payload);\n            return {\n                user\n            };\n        },\n        fetchPerUser: (state, action)=>{\n            return {\n                ...state,\n                peruser: action.payload\n            }; // Replace the state with new data\n        }\n    }\n});\nconst { addUser, fetchUser, updateUser, fetchPerUser } = UserSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserSlice.reducer);\n// Async action creator for post data\nconst addUserAsync = (userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"), userData);\n            const addedUser = response.data;\n            dispatch(addUser(addedUser)); // Add the user to Redux Store\n        } catch (err) {\n            console.log(\"Add User Error :\", err);\n        }\n    };\n// Async action creator for fetch data\nconst fetchUserAsync = ()=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(\"http://localhost:3000/api\", \"/user/routes\"));\n            const userData = response.data;\n            dispatch(fetchUser(userData)); // Dispatch the action with the fetched data\n        } catch (err) {\n            console.log(\"Fetch User Error :\", err);\n        }\n    };\n// Async action creator for update data\nconst updateUserAsync = (id, userData)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].patch(\"\".concat(\"http://localhost:3000/api\", \"/user/\").concat(id), userData);\n            const updatedUser = response.data;\n            dispatch(updateUser(updatedUser)); // Update the user to Redux Store\n        } catch (err) {\n            console.log(\"Update User Error :\", err);\n        }\n    };\n// Async action creator for fetch PER User data\nconst fetchPerUserAsync = (id)=>async (dispatch)=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"\".concat(\"http://localhost:3000/api\", \"/user/\").concat(id));\n            const userData = response.data[0];\n            let data = dispatch(fetchPerUser(userData)); // Dispatch the action with the fetched\n            return data.payload;\n        } catch (error) {\n            console.error(\"Error fetching users:\", error);\n        }\n    };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZS9Vc2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQztBQUNyQjtBQUUxQixNQUFNRSxlQUFlO0lBQ25CQyxNQUFNLEVBQUU7SUFDUkMsU0FBUyxFQUFFO0FBQ2I7QUFFQSxNQUFNQyxZQUFZTCw2REFBV0EsQ0FBQztJQUM1Qk0sTUFBTTtJQUNOSjtJQUNBSyxVQUFVO1FBQ1JDLFNBQVMsQ0FBQ0MsT0FBT0M7WUFDZkQsTUFBTU4sSUFBSSxDQUFDUSxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0osT0FBT0UsT0FBTztZQUMxQixPQUFPO2dCQUFFVDtZQUFLO1FBQ2hCO1FBQ0FZLFdBQVcsQ0FBQ04sT0FBT0M7WUFDakIsT0FBTztnQkFBRSxHQUFHRCxLQUFLO2dCQUFFTixNQUFNTyxPQUFPRSxPQUFPO1lBQUMsR0FBRyxrQ0FBa0M7UUFDL0U7UUFDQUksWUFBWSxDQUFDUCxPQUFPQztZQUNsQkQsTUFBTU4sSUFBSSxDQUFDUSxJQUFJLENBQUNELE9BQU9FLE9BQU87WUFDOUIsT0FBTztnQkFBRVQ7WUFBSztRQUNoQjtRQUNBYyxjQUFjLENBQUNSLE9BQU9DO1lBQ3BCLE9BQU87Z0JBQUUsR0FBR0QsS0FBSztnQkFBRUwsU0FBU00sT0FBT0UsT0FBTztZQUFDLEdBQUcsa0NBQWtDO1FBQ2xGO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUosT0FBTyxFQUFFTyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFLEdBQzNEWixVQUFVYSxPQUFPLENBQUM7QUFDcEIsK0RBQWViLFVBQVVjLE9BQU8sRUFBQztBQUVqQyxxQ0FBcUM7QUFFOUIsTUFBTUMsZUFBZSxDQUFDQyxXQUFhLE9BQU9DO1FBQy9DLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU10QixrREFBVSxDQUMvQixHQUFtQyxPQUFoQ3dCLDJCQUErQixFQUFDLGlCQUNuQ0o7WUFHRixNQUFNTyxZQUFZTCxTQUFTTSxJQUFJO1lBRS9CUCxTQUFTZCxRQUFRb0IsYUFBYSw4QkFBOEI7UUFDOUQsRUFBRSxPQUFPRSxLQUFLO1lBQ1pqQixRQUFRQyxHQUFHLENBQUMsb0JBQW9CZ0I7UUFDbEM7SUFDRixFQUFFO0FBRUYsc0NBQXNDO0FBRS9CLE1BQU1DLGlCQUFpQixJQUFNLE9BQU9UO1FBQ3pDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU10QixpREFBUyxDQUM5QixHQUFtQyxPQUFoQ3dCLDJCQUErQixFQUFDO1lBRXJDLE1BQU1KLFdBQVdFLFNBQVNNLElBQUk7WUFDOUJQLFNBQVNQLFVBQVVNLFlBQVksNENBQTRDO1FBQzdFLEVBQUUsT0FBT1MsS0FBSztZQUNaakIsUUFBUUMsR0FBRyxDQUFDLHNCQUFzQmdCO1FBQ3BDO0lBQ0YsRUFBRTtBQUVGLHVDQUF1QztBQUVoQyxNQUFNRyxrQkFBa0IsQ0FBQ0MsSUFBSWIsV0FBYSxPQUFPQztRQUN0RCxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNdEIsbURBQVcsQ0FDaEMsR0FBMkNpQyxPQUF4Q1QsMkJBQStCLEVBQUMsVUFBVyxPQUFIUyxLQUMzQ2I7WUFHRixNQUFNZSxjQUFjYixTQUFTTSxJQUFJO1lBRWpDUCxTQUFTTixXQUFXb0IsZUFBZSxpQ0FBaUM7UUFDdEUsRUFBRSxPQUFPTixLQUFLO1lBQ1pqQixRQUFRQyxHQUFHLENBQUMsdUJBQXVCZ0I7UUFDckM7SUFDRixFQUFFO0FBRUYsK0NBQStDO0FBQ3hDLE1BQU1PLG9CQUFvQixDQUFDSCxLQUFPLE9BQU9aO1FBQzlDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU10QixpREFBUyxDQUM5QixHQUEyQ2lDLE9BQXhDVCwyQkFBK0IsRUFBQyxVQUFXLE9BQUhTO1lBRTdDLE1BQU1iLFdBQVdFLFNBQVNNLElBQUksQ0FBQyxFQUFFO1lBQ2pDLElBQUlBLE9BQU9QLFNBQVNMLGFBQWFJLFlBQVksdUNBQXVDO1lBQ3BGLE9BQU9RLEtBQUtqQixPQUFPO1FBQ3JCLEVBQUUsT0FBTzBCLE9BQU87WUFDZHpCLFFBQVF5QixLQUFLLENBQUMseUJBQXlCQTtRQUN6QztJQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvc2xpY2UvVXNlclNsaWNlLmpzP2Q5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogW10sXHJcbiAgcGVydXNlcjogW10sXHJcbn07XHJcblxyXG5jb25zdCBVc2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJ1c2VyXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyLnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIHJldHVybiB7IHVzZXIgfTtcclxuICAgIH0sXHJcbiAgICBmZXRjaFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9OyAvLyBSZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIG5ldyBkYXRhXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlci5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xyXG4gICAgfSxcclxuICAgIGZldGNoUGVyVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHBlcnVzZXI6IGFjdGlvbi5wYXlsb2FkIH07IC8vIFJlcGxhY2UgdGhlIHN0YXRlIHdpdGggbmV3IGRhdGFcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRVc2VyLCBmZXRjaFVzZXIsIHVwZGF0ZVVzZXIsIGZldGNoUGVyVXNlciB9ID1cclxuICBVc2VyU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGRlZmF1bHQgVXNlclNsaWNlLnJlZHVjZXI7XHJcblxyXG4vLyBBc3luYyBhY3Rpb24gY3JlYXRvciBmb3IgcG9zdCBkYXRhXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVXNlckFzeW5jID0gKHVzZXJEYXRhKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2VyL3JvdXRlc2AsXHJcbiAgICAgIHVzZXJEYXRhXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFkZGVkVXNlciA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgZGlzcGF0Y2goYWRkVXNlcihhZGRlZFVzZXIpKTsgLy8gQWRkIHRoZSB1c2VyIHRvIFJlZHV4IFN0b3JlXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFkZCBVc2VyIEVycm9yIDpcIiwgZXJyKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBBc3luYyBhY3Rpb24gY3JlYXRvciBmb3IgZmV0Y2ggZGF0YVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckFzeW5jID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2VyL3JvdXRlc2BcclxuICAgICk7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXIodXNlckRhdGEpKTsgLy8gRGlzcGF0Y2ggdGhlIGFjdGlvbiB3aXRoIHRoZSBmZXRjaGVkIGRhdGFcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmV0Y2ggVXNlciBFcnJvciA6XCIsIGVycik7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gQXN5bmMgYWN0aW9uIGNyZWF0b3IgZm9yIHVwZGF0ZSBkYXRhXHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlckFzeW5jID0gKGlkLCB1c2VyRGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L3VzZXIvJHtpZH1gLFxyXG4gICAgICB1c2VyRGF0YVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkVXNlciA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgZGlzcGF0Y2godXBkYXRlVXNlcih1cGRhdGVkVXNlcikpOyAvLyBVcGRhdGUgdGhlIHVzZXIgdG8gUmVkdXggU3RvcmVcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIFVzZXIgRXJyb3IgOlwiLCBlcnIpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIEFzeW5jIGFjdGlvbiBjcmVhdG9yIGZvciBmZXRjaCBQRVIgVXNlciBkYXRhXHJcbmV4cG9ydCBjb25zdCBmZXRjaFBlclVzZXJBc3luYyA9IChpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS91c2VyLyR7aWR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0gcmVzcG9uc2UuZGF0YVswXTtcclxuICAgIGxldCBkYXRhID0gZGlzcGF0Y2goZmV0Y2hQZXJVc2VyKHVzZXJEYXRhKSk7IC8vIERpc3BhdGNoIHRoZSBhY3Rpb24gd2l0aCB0aGUgZmV0Y2hlZFxyXG4gICAgcmV0dXJuIGRhdGEucGF5bG9hZDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHVzZXJzOlwiLCBlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJheGlvcyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJwZXJ1c2VyIiwiVXNlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVXNlciIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyIiwidXBkYXRlVXNlciIsImZldGNoUGVyVXNlciIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiYWRkVXNlckFzeW5jIiwidXNlckRhdGEiLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYWRkZWRVc2VyIiwiZGF0YSIsImVyciIsImZldGNoVXNlckFzeW5jIiwiZ2V0IiwidXBkYXRlVXNlckFzeW5jIiwiaWQiLCJwYXRjaCIsInVwZGF0ZWRVc2VyIiwiZmV0Y2hQZXJVc2VyQXN5bmMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/slice/UserSlice.js\n"));

/***/ })

});