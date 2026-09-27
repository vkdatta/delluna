export const name="texture-fill";
export const id="dl_cbbb256fc05b29b45a71";
export const url=new URL("../icons/texture-fill.svg?v=014019fdb04b797c0466852d8dff5213fab509d390ccd1c919ab69ced1121f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
