export const name="bottom_navigation";
export const id="dl_9888a0463641403128ae";
export const url=new URL("../icons/bottom_navigation.svg?v=7002ea4365896cba7aa703fc129df1efe3d485eba4a028c6d3fe4875564efa2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
