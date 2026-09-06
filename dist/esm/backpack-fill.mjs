export const name="backpack-fill";
export const id="dl_0c052ccb96be4f8881d6";
export const url=new URL("../icons/backpack-fill.svg?v=b7cfd484420773d5cdcb87ee0509fed144acea319cce70ea7548aa9f74c9b0b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
