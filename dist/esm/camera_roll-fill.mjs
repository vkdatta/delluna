export const name="camera_roll-fill";
export const id="dl_3ebdac1027c13a9cb722";
export const url=new URL("../icons/camera_roll-fill.svg?v=0437614eaa42dfb53d5e020ef3669c94a957639dc7414ad91a0d900aff55ae4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
