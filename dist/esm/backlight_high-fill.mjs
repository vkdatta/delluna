export const name="backlight_high-fill";
export const id="dl_98dddd86e5774d7ca48e";
export const url=new URL("../icons/backlight_high-fill.svg?v=0363cb79184b9ceab3c400ee728570179e5ccb1b329129758845ed56812ab353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
