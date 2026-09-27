export const name="square-half-thin";
export const id="dl_3c486d298ece71dfa4c5";
export const url=new URL("../icons/square-half-thin.svg?v=8adee46d851de40f11e0a4829e7a8e079bb014a41e8b76eb882b8e6f8b5330ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
