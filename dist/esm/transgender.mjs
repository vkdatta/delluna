export const name="transgender";
export const id="dl_3802ddf7cb2a418b8445";
export const url=new URL("../icons/transgender.svg?v=93b54d657f0f7381b8137e73656edfc456812b80732a61aa40a9a44f3a378b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
