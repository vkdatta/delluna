export const name="filter_3";
export const id="dl_23b3be5406c7b322d053";
export const url=new URL("../icons/filter_3.svg?v=10b88c79fdd0468f7bfbe42c027fc47664b0246d18f2a8752e43e6c8543713a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
