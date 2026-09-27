export const name="thermostat-fill";
export const id="dl_65f4e1793ca1d51fdf49";
export const url=new URL("../icons/thermostat-fill.svg?v=6dfe5a34bdb932ea46e7bdf667118503bd0f43db9295b445c222ea2ebff56669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
