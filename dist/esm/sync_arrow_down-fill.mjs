export const name="sync_arrow_down-fill";
export const id="dl_334e804ed678b3d3c3e2";
export const url=new URL("../icons/sync_arrow_down-fill.svg?v=4a8e214ab4e048c5377447405514dd0d32dfbff05978eb0263479bbb9898dd1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
