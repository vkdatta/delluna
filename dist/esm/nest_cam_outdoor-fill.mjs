export const name="nest_cam_outdoor-fill";
export const id="dl_7683a8865bb6ecc45018";
export const url=new URL("../icons/nest_cam_outdoor-fill.svg?v=31ea76ac378ca0b29b8c31250ab692d978d1acff4bf67b13aaee977a1d736611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
