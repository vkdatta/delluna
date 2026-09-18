export const name="high_quality-fill";
export const id="dl_eea0505e8ca340928344";
export const url=new URL("../icons/high_quality-fill.svg?v=a4f3612069e54915df4ed8bca5b2d30f53303e30e0fda44d8a74a0ed0cc833a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
