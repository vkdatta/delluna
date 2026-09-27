export const name="swipe_right";
export const id="dl_b163a6c5dcd02525d256";
export const url=new URL("../icons/swipe_right.svg?v=0e3560be10793e12924e493ab919ab6847516f32920dfbea6d588ce86925105c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
