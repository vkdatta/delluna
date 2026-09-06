export const name="lucid_3-map-plus";
export const id="dl_711b4c2343354e569e19";
export const url=new URL("../icons/lucid_3-map-plus.svg?v=53f95f475683d5af7b26f4e364fdb04c49aedab1717f3f1cd2968af613caa733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
