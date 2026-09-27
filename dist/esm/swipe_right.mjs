export const name="swipe_right";
export const id="dl_7e39a75161847a0eb139";
export const url=new URL("../icons/swipe_right.svg?v=85bff30f1c27072d86ce695598863c25ce31792c027269759aa287506114adf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
