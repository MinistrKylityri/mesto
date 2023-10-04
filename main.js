(()=>{"use strict";var t={formSelector:".form__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_invalid",errorClass:"error-message_active"},e=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__form_edit"),o=document.querySelector(".popup__form_add-card"),i=document.querySelector(".popup__avatar-form"),u=document.querySelector(".profile__avatar-button");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var f=function(){function t(e,n,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_handleDelete",(function(){a._openDelete(a._cardId)})),l(this,"_handlelike",(function(){a._changeLike(a._buttonLike,a._cardId)})),this._title=e.name,this._link=e.link,this._myId=u,this._ownerId=e.owner._id,this._cardTemplate=n,this._showPopupImage=r,this._changeLike=i,this._cardId=e._id,this._likes=e.likes,this._likesLength=e.likes.length,this._openDelete=o,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__img"),this._cardName=this._element.querySelector(".element__name"),this._buttonLike=this._element.querySelector(".element__button"),this._buttonDelete=this._element.querySelector(".element__delete"),this._counter=this._element.querySelector(".element__counter")}var e,n;return e=t,(n=[{key:"_changeVisibleForTrashButton",value:function(){this._myId===this._ownerId?this._buttonDelete.style.display="block":this._buttonDelete.style.display="none"}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"removeCardElement",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){this._buttonLike.classList.contains("element__button_active")}},{key:"toggleLike",value:function(t){this._buttonLike.classList.toggle("element__button_active"),this._counter.textContent=t.length}},{key:"_setEventListeners",value:function(){var t=this;this._buttonDelete.addEventListener("click",this._handleDelete),this._buttonLike.addEventListener("click",this._handlelike),this._cardImage.addEventListener("click",(function(){t._showPopupImage({title:t._title,link:t._link})}))}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._buttonLike.classList.add("element__button_active")})),this._counter.textContent=this._likesLength}},{key:"createCard",value:function(){return this._setEventListeners(),this._cardName.textContent=this._title,this._cardImage.src=this._link,this._cardImage.alt=this._title,this._checkLikeStatus(),this._changeVisibleForTrashButton(),this._element}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function h(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var b=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_setEventListeners",(function(){r.inputs.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonValidity()}))}))})),h(this,"enableValidation",(function(){r._setEventListeners()})),this._config=e,this.form=n,this.inputs=Array.from(this.form.querySelectorAll(e.inputSelector)),this.popupSubmitButton=this.form.querySelector(e.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.add(this._config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.remove(this._config.inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_setButtonDisable",value:function(){this.popupSubmitButton.setAttribute("disabled",""),this.popupSubmitButton.classList.add(this._config.inactiveButtonClass)}},{key:"_setButtonEnable",value:function(){this.popupSubmitButton.removeAttribute("disabled"),this.popupSubmitButton.classList.remove(this._config.inactiveButtonClass)}},{key:"resetValidation",value:function(){var t=this;this.inputs.forEach((function(e){t._hideInputError(e)})),this._setButtonDisable()}},{key:"_toggleButtonValidity",value:function(){this.form.checkValidity()?this._setButtonEnable():this._setButtonDisable()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"addItemAppend",value:function(t){this._container.append(t)}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function k(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===g(e)?e:String(e)}var E=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),k(this,"_handleEscape",(function(t){"Escape"===t.key&&n.close()})),k(this,"_closePopupButton",(function(){n.close()})),k(this,"_handleClickByOverlay",(function(t){(t.target.classList.contains("popup_open")||t.target.classList.contains("popup__close"))&&n.close()})),this._popupElement=document.querySelector(e),this._popupCloseButton=this._popupElement.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._closePopupButton),this._popupElement.addEventListener("click",this._handleClickByOverlay)}},{key:"open",value:function(){this._popupElement.classList.add("popup_open"),document.addEventListener("keydown",this._handleEscape)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_open"),document.removeEventListener("keydown",this._handleEscape)}}])&&S(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(r);if(o){var n=C(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitHandler=e,n._formElement=n._popupElement.querySelector(".popup__form"),n._inputList=Array.from(n._formElement.querySelectorAll(".popup__input")),n._submitButton=n._formElement.querySelector(".popup__submit"),n._defaultButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputsValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputsValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;P(C(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._submitHandler(t._getInputsValues())}))}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"close",value:function(){P(C(u.prototype),"close",this).call(this),this._formElement.reset()}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}function D(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(n);if(r){var o=q(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=R(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.title,n._imagePopupCaption.textContent=t.title,x((e=R(n),q(i.prototype)),"open",e).call(e)},(u=D(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popupElement.querySelector(".popup__element-img"),n._imagePopupCaption=n._popupElement.querySelector(".popup__title-img"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(E);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileJob=document.querySelector(e.profileJobSelector),this._profileAvatar=document.querySelector(e.profileAvatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent,avatar:this._profileAvatar.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.job,r=t.avatar;this._profileAvatar.src=r,this._profileName.textContent=e,this._profileJob.textContent=n}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function J(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.job})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.title,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes "),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes "),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&J(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}function $(){return $="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=K(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},$.apply(this,arguments)}function G(t,e){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},G(t,e)}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},K(t)}var Q,W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&G(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=K(r);if(o){var n=K(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popupElement.querySelector(".popup__form"),e._submitButton=e._form.querySelector(".popup__submit"),e._defaultButtonText=e._submitButton.textContent,e}return e=u,(n=[{key:"setSubmit",value:function(t){this._submitForm=t}},{key:"setEventListeners",value:function(){var t=this;$(K(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Удаление...",t._submitForm()}))}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function X(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return Y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var Z=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"0763629c-3490-40e1-9aae-c13c00296c11","Content-Type":"application/json"}}),tt=new A(".popup_img");tt.setEventListeners();var et=new N({profileNameSelector:".profile__name",profileJobSelector:".profile__job",profileAvatar:".profile__avatar"});function nt(t){var e=new f(t,"#card-template",tt.open,(function(t){ot.open(),ot.setSubmit((function(){Z.deleteCard(t).then((function(){e.removeCardElement(),ot.close()})).catch((function(t){return console.error("Не получилось удалить карточку ".concat(t))})).finally((function(){ot.setupDefaultText()}))}))}),(function(t,n){t?Z.deleteLike(n).then((function(n){console.log(t),console.log(n.likes),console.log(toggleLike),e.toggleLike(n.likes)})).catch((function(t){return console.log("Ошибка при добавлении лайка ".concat(t))})):Z.addLike(n).then((function(n){console.log(t),console.log(n.likes),e.toggleLike(n.likes)})).catch((function(t){return console.log("Ошибка при добавлении лайка ".concat(t))}))}),Q);return e.createCard()}var rt=new d((function(t){rt.addItem(nt(t))}),".elements"),ot=new W(".popup_delete-confirm");ot.setEventListeners();var it=new I(".popup_edit-avatar",(function(t){Z.setNewAvatar(t).then((function(t){et.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),it.close()})).catch((function(t){return console.log("Ошибка при редактирование аватара ".concat(t))})).finally((function(){return it.setupDefaultText()}))}));it.setEventListeners();var ut=new I(".popup_edit",(function(t){Z.setUserInfo(t).then((function(t){console.log(t),et.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),ut.close()})).catch((function(t){return console.log("Ошибка при редактирование профиля ".concat(t))})).finally((function(){return ut.setupDefaultText()}))}));ut.setEventListeners();var at=new I(".popup_add",(function(t){Promise.all([Z.getInfo(),Z.addCard(t)]).then((function(t){var e=X(t,2),n=e[0],r=e[1];r.myid=n._id,rt.addItem(nt(r)),at.close()})).catch((function(t){return console.log("Ошибка при создании новой карточки ".concat(t))})).finally((function(){return at.setupDefaultText()}))}));at.setEventListeners(),e.addEventListener("click",(function(){ct.resetValidation(),ut.setInputsValues(et.getUserInfo()),ut.open()})),n.addEventListener("click",(function(){lt.resetValidation(),at.open()})),u.addEventListener("click",(function(){st.resetValidation(),it.setInputsValues(et.getUserInfo()),it.open()}));var ct=new b(t,r),lt=new b(t,o),st=new b(t,i);st.enableValidation(),ct.enableValidation(),lt.enableValidation(),Promise.all([Z.getInfo(),Z.getCards()]).then((function(t){var e=X(t,2),n=e[0],r=e[1];Q=n._id,et.setUserInfo({username:n.name,job:n.about,avatar:n.avatar}),rt.renderItems(r)})).catch((function(t){return console.log("Ошибка при создании начальных данных страницы ".concat(t))}))})();