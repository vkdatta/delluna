export const name="arrow-circle-down-left-fill";
export const id="dl_20c7d10227ca487e8192";
export const url=new URL("../icons/arrow-circle-down-left-fill.svg?v=b6b79f3270467dc3549b347ac4839656784c6a4bfb74bda68829985c10695cb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
