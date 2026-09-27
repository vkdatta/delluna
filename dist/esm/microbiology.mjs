export const name="microbiology";
export const id="dl_3caf1cb4c43daed446a5";
export const url=new URL("../icons/microbiology.svg?v=a4792699b4e16b71665255832aff831570bc5c88ab8b2c5c4b780066e57db1f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
