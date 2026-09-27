export const name="sensor_window";
export const id="dl_e41c7018f335864b0806";
export const url=new URL("../icons/sensor_window.svg?v=cd710e9e9245d817c357a6d11f95c1b5f6f77fa2d3ecbb3b3f362dc0848dda92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
