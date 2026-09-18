export const name="wheat-fill";
export const id="dl_d116d5c7895a40be8858";
export const url=new URL("../icons/wheat-fill.svg?v=f63a1bab9b3fa0e34b02c8217640304a465f0cb75b1b36024829ba99ddaf1775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
