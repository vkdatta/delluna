export const name="car_fan_mid_low_right-fill";
export const id="dl_0c31851a6359f543e6ca";
export const url=new URL("../icons/car_fan_mid_low_right-fill.svg?v=9a8bf4f9dabbf769a15a5588b65663fafa3dbe05c7255b8fa8c2ee2d688cb448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
