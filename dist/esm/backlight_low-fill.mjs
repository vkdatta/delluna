export const name="backlight_low-fill";
export const id="dl_0b06c4d0198846eef2ec";
export const url=new URL("../icons/backlight_low-fill.svg?v=e081a18fd559b608fbb5285b316d6388e0511264bcde33ecad23a0eb3c148203",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
