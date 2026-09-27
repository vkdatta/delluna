export const name="home_work";
export const id="dl_b4b6727db2d1cb360f96";
export const url=new URL("../icons/home_work.svg?v=adb0ea91dcca6e70e91ca1a00926191d3099d300632530bf061ef403fa5c0eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
