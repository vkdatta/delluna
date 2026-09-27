export const name="bento-fill";
export const id="dl_ae7c70dd9950561d1254";
export const url=new URL("../icons/bento-fill.svg?v=b41c3a4461920f96fb6cab9266dcda83b2ec8540c7e510617efc2058e76bd6be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
