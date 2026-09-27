export const name="screenshot_frame_2-fill";
export const id="dl_49915a796d1d8e023436";
export const url=new URL("../icons/screenshot_frame_2-fill.svg?v=fcfd471e1e231baecc3139fdc5db03b92cf48fb0174220f874477db5e47680f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
