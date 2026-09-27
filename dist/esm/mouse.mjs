export const name="mouse";
export const id="dl_e24b552f32c759ed118d";
export const url=new URL("../icons/mouse.svg?v=e32fac4bee7d98cbc564a1c4055eb9b1002e8a25faf0f5889421bbdf8f10f6ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
