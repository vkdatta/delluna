export const name="mobile_camera_rear-fill";
export const id="dl_df923135e4fe43d98faa";
export const url=new URL("../icons/M/mobile_camera_rear-fill.svg?v=50b95b294b1256954127c21964ef67e4ee7891df03f6a59dc991f18541ea38ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
