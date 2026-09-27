export const name="user-round-x";
export const id="dl_c8c612b1942f4e649a8d";
export const url=new URL("../icons/user-round-x.svg?v=ef8c68fb6c7e870f40847314f68a2f5ca0730f9d0530fb675f3ca0a677e1fc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
