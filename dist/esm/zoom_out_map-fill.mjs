export const name="zoom_out_map-fill";
export const id="dl_0d75a14b81d7dc15b149";
export const url=new URL("../icons/zoom_out_map-fill.svg?v=ea9e60471b3461a5d37bb423140ff9cbb0c7b7d0474e1bf0e9752b65a7d5bea8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
