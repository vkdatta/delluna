export const name="lucid_1-briefcase-conveyor-belt";
export const id="dl_afd43382d1504bd1b39f";
export const url=new URL("../icons/lucid_1-briefcase-conveyor-belt.svg?v=2f3298b695eb25b187ba26b07f29f5c6a963dc8826d1035fe98987becf016c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
