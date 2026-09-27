export const name="motion_blur-fill";
export const id="dl_afe058b51a5fc11523f7";
export const url=new URL("../icons/motion_blur-fill.svg?v=193b6ed57d1b042059aa626dd41c8c070eadd07b6114d55465e53db6411906df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
