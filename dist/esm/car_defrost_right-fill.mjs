export const name="car_defrost_right-fill";
export const id="dl_501347a7927c24c80bcb";
export const url=new URL("../icons/car_defrost_right-fill.svg?v=9add0f18bdaf8b64399e0b55884fe747d4182e8f1212f220d9b2f035e0d942a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
