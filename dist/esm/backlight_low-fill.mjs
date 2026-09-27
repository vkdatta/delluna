export const name="backlight_low-fill";
export const id="dl_9c5754df3d6d68ebaabb";
export const url=new URL("../icons/backlight_low-fill.svg?v=40d4660eaac8a20a3b48c008be32c0b575ed1629ac0d6df587f47629a1b9b54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
