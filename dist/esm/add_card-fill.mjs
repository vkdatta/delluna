export const name="add_card-fill";
export const id="dl_5bb82119192468cbabcd";
export const url=new URL("../icons/add_card-fill.svg?v=c35773646ba46a82bda7b7cae5c68170a0e68f2bbb187e67acc741437c8422d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
