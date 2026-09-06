export const name="battery-vertical-low";
export const id="dl_2d2c5eb617df4c6292a9";
export const url=new URL("../icons/battery-vertical-low.svg?v=25c52bfb0f0d2772a94433b318376f08b3d0192cfe84f2ee525058cf5a13881e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
