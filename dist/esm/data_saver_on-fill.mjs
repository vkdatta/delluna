export const name="data_saver_on-fill";
export const id="dl_7ffa44b657e642f6b330";
export const url=new URL("../icons/data_saver_on-fill.svg?v=37c61f4ae22455bae65b3b8832cfac52744c0790016e77d1329eaf5488e43ac3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
