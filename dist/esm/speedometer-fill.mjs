export const name="speedometer-fill";
export const id="dl_1087b6d1f08da3ae147a";
export const url=new URL("../icons/speedometer-fill.svg?v=9ccc4a5215171f8100daa7403a328e238d069795d3d3dabe48047fd3fea498da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
