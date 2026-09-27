export const name="cable_car-fill";
export const id="dl_893a947cb3b31a76dbd2";
export const url=new URL("../icons/cable_car-fill.svg?v=65c9fcbd5b2549c3b73bd24ab2d7e6b2b0d35c530f997c4768b9a25433f7b26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
