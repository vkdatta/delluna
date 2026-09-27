export const name="invert_colors_off-fill";
export const id="dl_a10dde969db8c35571e1";
export const url=new URL("../icons/invert_colors_off-fill.svg?v=63a32f1399c4eb7d14e9d8d2910f14be6c5e5359dda6cc5c95557881099751fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
