export const name="car_defrost_low_right-fill";
export const id="dl_9b6934dbd4da32ad154e";
export const url=new URL("../icons/car_defrost_low_right-fill.svg?v=9b9abb30d7fb88a6f13db3191ded8c299f02b3a0337542b57221a957432a99af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
