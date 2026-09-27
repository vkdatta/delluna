export const name="settings_bluetooth-fill";
export const id="dl_5d0d5010179c155215fc";
export const url=new URL("../icons/settings_bluetooth-fill.svg?v=dc100fdc9b2a01a003e998ae72b4656d890b2d56a083db15c9da664f9178f32f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
