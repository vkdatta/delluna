export const name="dataset_linked";
export const id="dl_35f61806b8e4c72ce981";
export const url=new URL("../icons/dataset_linked.svg?v=8365d7ed567dab1a2402c1ce40f5a79d2f22aeb4da308a34339c97d6cd166615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
