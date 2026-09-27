export const name="map_pin_review";
export const id="dl_c6d116ecb48652a10617";
export const url=new URL("../icons/map_pin_review.svg?v=3be23d1f48f06d98cf5633fcd3fa01be52942df593f816e8c80040ad7e03ff9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
