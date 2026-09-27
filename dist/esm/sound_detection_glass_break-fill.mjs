export const name="sound_detection_glass_break-fill";
export const id="dl_65e90f6ecfb545f9e807";
export const url=new URL("../icons/sound_detection_glass_break-fill.svg?v=3941304fa6c9b1f797fb115e3f88fb7abee13c0a7eececb72014e9b701c05516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
