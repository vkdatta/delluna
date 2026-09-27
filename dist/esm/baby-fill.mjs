export const name="baby-fill";
export const id="dl_e1d3d4bab5b44c37bc15";
export const url=new URL("../icons/baby-fill.svg?v=a9c2ad1dd11a728e11211613afa4582c4ceca136ad8a74227795b4c5814d5ffe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
