export const name="hide_source-fill";
export const id="dl_73061b20012c72aff341";
export const url=new URL("../icons/hide_source-fill.svg?v=d2dd74b7515dede5be5f76324c09beca884c3a2006b0c475547cdcdec61961ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
