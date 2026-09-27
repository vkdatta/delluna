export const name="transportation-fill";
export const id="dl_8c55a02693c16369cc0f";
export const url=new URL("../icons/transportation-fill.svg?v=7585bb9e40b9f6a8797214efbc967e89e934456f6029eaaf979d0424c1680098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
