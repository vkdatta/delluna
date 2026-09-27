export const name="tooth-light";
export const id="dl_92423e6e6c2d5dea3662";
export const url=new URL("../icons/tooth-light.svg?v=514e3f351a467191955f539a1d8a62e0a89ff043cad77a592b63fa64da9c47fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
