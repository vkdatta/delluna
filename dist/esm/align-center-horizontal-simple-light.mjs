export const name="align-center-horizontal-simple-light";
export const id="dl_5469cb4150fa4c128d76";
export const url=new URL("../icons/align-center-horizontal-simple-light.svg?v=00140575ee8d819eb9d3ddc2e34019e300b80e210aa62fa539627866d2ed3252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
