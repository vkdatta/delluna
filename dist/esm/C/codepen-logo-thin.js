export const name="codepen-logo-thin";
export const id="dl_fed36a5c991c4be29785";
export const url=new URL("../../icons/C/codepen-logo-thin.svg?v=f3cbff124eba34730b47a0a717e25e98ed45f8dcbe54aac1c0ef73d831fa460f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
