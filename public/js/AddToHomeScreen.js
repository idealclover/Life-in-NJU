const closeBase64 = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAl0lEQVR4Ae2TMQ6DMBTFfA+kHqkSUmcKgd5/BIaEqsOfWqyILgx4jewl/3FxSm74q8ODlcQeL1Za769sFNKOXthYaBAS5Wci9ExH4AlG143xKxH6k0oiMbluTEQi9B5BEpW6fNtHH+CfQCEd13PcxVF9IHnC9V6us1qvTsjVScJ1SeicM53MbKZBaFlkcYmZO473aTghF2/X9XbQ39L36gAAAABJRU5ErkJggg=='

const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
  display: none;
  z-index: 100;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
  font-family: '"Helvetica Neue", Helvetica, Arial, sans-serif';
}

:host([hidden]) {
  display: none;
}

#install {
  padding: 16px 20px;
  border-radius:10px;
  background: rgba(255,255,255,.7);
  margin-bottom: 1px;
}

#share {
  vertical-align: top;
}

#arrowOuter {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

#arrowInner {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid rgba(255,255,255,.7);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -14px;
}

#close {
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  padding: 5px;
  cursor: pointer;
}
</style>
<div id="install">添加到收藏吧！</div>
<div id="arrowOuter"></div>
<div id="arrowInner"></div>
<img id="close" src="data:image/png;base64,${closeBase64}">
`;

export default class AddToHomeScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._closeClick = closeClick.bind(this);
  }

  connectedCallback() {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i) && !ua.match(/FxiOS/i);
    const isClosed = localStorage.isClosed;
    if(isClosed) return;
    if (iOSSafari && !navigator.standalone) {
      this.style.display = 'inline-block';
      this.shadowRoot.getElementById('close').addEventListener('click', this._closeClick);
    }
  }

  disconnectedCallback() {
    this.shadowRoot.getElementById('close').removeEventListener('click', this._closeClick);
  }
}

function closeClick() {
  localStorage.isClosed = 'true';
  this.style.display = 'none';
}

window.customElements.define('add-to-home-screen', AddToHomeScreen);
