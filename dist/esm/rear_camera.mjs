export const name="rear_camera";
export const id="dl_317011c4cffa43cca8c9";
export const url=new URL("../icons/rear_camera.svg?v=dae6499b939aa2098105e681f4741c0cc97fe59ad473fa42b9540adfed40bf01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
