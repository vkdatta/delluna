export const name="udon-fill";
export const id="dl_b236e209165fce030a7b";
export const url=new URL("../icons/udon-fill.svg?v=d8db7d617557f822476f8bbdb31aa8dc3b7af6a67fe558335699aecf2536a521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
