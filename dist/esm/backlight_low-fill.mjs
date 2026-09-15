export const name="backlight_low-fill";
export const id="dl_2c6cc37aafd2438eaf90";
export const url=new URL("../icons/B/backlight_low-fill.svg?v=bd9e2447596d1ce03dab9ae21e6800426b08bb61a330b0e0ed33d539ebec6801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
