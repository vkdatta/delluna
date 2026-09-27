export const name="sync_disabled-fill";
export const id="dl_4f2da5e28f15a84451ce";
export const url=new URL("../icons/sync_disabled-fill.svg?v=b5453cbc29b16ec4f70a4d76ce99756a0d32248421b222f2c44ba15c10e7f839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
