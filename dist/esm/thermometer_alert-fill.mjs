export const name="thermometer_alert-fill";
export const id="dl_cfb2d2ecdb3d40fd8835";
export const url=new URL("../icons/thermometer_alert-fill.svg?v=e0d17795a37b7e04d323e58e32977cf7e2de06590f99f6d7859f8e68d0079e10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
