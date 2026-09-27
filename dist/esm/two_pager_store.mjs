export const name="two_pager_store";
export const id="dl_3b3c5f8a391127fe24eb";
export const url=new URL("../icons/two_pager_store.svg?v=4d5dd368583dcddc88f1b613909e9b1fcac5bb5637c7c48f3d0de4a9f0bc2396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
