export const name="dashboard_2_gear";
export const id="dl_716474f3849169fe9e7d";
export const url=new URL("../icons/dashboard_2_gear.svg?v=6b36dbb81b3e5a4d2f6ef78af74f782a7205a9ea92f99c0ae51469169f8bdb86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
