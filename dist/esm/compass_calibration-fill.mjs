export const name="compass_calibration-fill";
export const id="dl_f81bff527203465b5ea8";
export const url=new URL("../icons/compass_calibration-fill.svg?v=e965b7fa0f3d68f658679363716d59c48f4ce46f8691efa17776ec6d0b94217f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
