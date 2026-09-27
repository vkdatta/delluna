export const name="car_fan_low_mid_left-fill";
export const id="dl_dcf1742541dfeddae940";
export const url=new URL("../icons/car_fan_low_mid_left-fill.svg?v=7c618a4f403ee831ab183bb81a1f297ecb9df3dd6802dfd54687d8dd8b0b2354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
