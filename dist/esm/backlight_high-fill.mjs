export const name="backlight_high-fill";
export const id="dl_af714bfa9ef595aca799";
export const url=new URL("../icons/backlight_high-fill.svg?v=0c121a8e024607d87cc149440da9e292b067d4b7db35b4cb0c70dfd901aa7fde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
