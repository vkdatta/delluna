export const name="home_storage_gear";
export const id="dl_cec4dd1d0d283fe7e8de";
export const url=new URL("../icons/home_storage_gear.svg?v=11a14bce83b29df9b741c9718adb0cb764bf79cac2867b00d5a4b53cf5d2dd94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
