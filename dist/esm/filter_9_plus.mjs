export const name="filter_9_plus";
export const id="dl_81e8d08122a173dc3ad2";
export const url=new URL("../icons/filter_9_plus.svg?v=7ce48afd3de0949b5960dc98d4384048e706ad2611a6e5d1b1948be7be8d64f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
