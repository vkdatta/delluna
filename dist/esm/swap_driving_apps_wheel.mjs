export const name="swap_driving_apps_wheel";
export const id="dl_e217d7b37ad2fce0bb01";
export const url=new URL("../icons/swap_driving_apps_wheel.svg?v=28a8627be5253cf7ed106061c4c25008e90919b0d0cf121f4eeeeecb65b60cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
