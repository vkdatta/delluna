export const name="crosshair-simple";
export const id="dl_a0fff58075ca499b8b6f";
export const url=new URL("../icons/crosshair-simple.svg?v=f093cd3a97da578591f8edfb1df3d9dd2668210cc99546f19e79f25fcf2a73c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
