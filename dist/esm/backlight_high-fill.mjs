export const name="backlight_high-fill";
export const id="dl_f6b2cf588fbbc1f10d5a";
export const url=new URL("../icons/backlight_high-fill.svg?v=db93438c409e20b1c8ba50d63e86cdaf3de76c4089a9bfa8e51efcfef2764060",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
