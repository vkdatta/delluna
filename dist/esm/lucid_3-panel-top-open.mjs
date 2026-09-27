export const name="lucid_3-panel-top-open";
export const id="dl_7285e1663f214c88b6bb";
export const url=new URL("../icons/lucid_3-panel-top-open.svg?v=207d5efd4040e15526dd0508f7e97455fb5afe1f484192f3a021b30c597cd9e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
