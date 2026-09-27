export const name="iframe_off-fill";
export const id="dl_cbe3a823424f2ab06ac1";
export const url=new URL("../icons/iframe_off-fill.svg?v=c9046237009072df734b626bdbb44a5c565a88c3dff9df0e0b7787619eb43eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
