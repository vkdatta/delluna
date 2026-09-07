export const name="poker-chip-light";
export const id="dl_d7311141a0564f69ba0e";
export const url=new URL("../icons/poker-chip-light.svg?v=672ce328b09e6bf6e5ce1fc3fc8ca0de27973246f7d336cd1996ade89869a897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
