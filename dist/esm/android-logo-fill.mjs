export const name="android-logo-fill";
export const id="dl_817390ebed7a4962b5c1";
export const url=new URL("../icons/android-logo-fill.svg?v=244f035d766202995823ab0eaceee6f51ac46af4288e70fd01a6d370e778ed7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
