export const name="stool-thin";
export const id="dl_292531ed544fbc4f31c3";
export const url=new URL("../icons/stool-thin.svg?v=853a40e16b2253efc7c9409be72d850af9502d54aed8d5acb87a53e271ea29bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
