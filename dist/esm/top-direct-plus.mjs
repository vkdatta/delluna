export const name="top-direct-plus";
export const id="dl_a77d9a4c461f4d929da2";
export const url=new URL("../icons/add/top-direct-plus.svg?v=675278b56246ebb30c1a81d5d97bc9f3a787ebbfeb43a5c3eb4142afb75924f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
