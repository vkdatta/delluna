export const name="lucid_2-id-card-lanyard";
export const id="dl_8375003532fc42489652";
export const url=new URL("../icons/lucid_2-id-card-lanyard.svg?v=fe8f737f62ea3f51b0f469c4cbf9e5631753eb54951032e8c8e65883cade95c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
