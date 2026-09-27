export const name="selection-inverse-duotone";
export const id="dl_d68a4aaecae99f71603b";
export const url=new URL("../icons/selection-inverse-duotone.svg?v=957cd12087db63e65cb5b0782ec295768d7ef7e464f1d3b78021daa0dfcab3d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
