export const name="car_fan_low_left-fill";
export const id="dl_87c4b7b4c024856350c1";
export const url=new URL("../icons/car_fan_low_left-fill.svg?v=236820389e9db66bfb5b73bee4278ffe2405b1cc4f9cb42454467e5c96c5680c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
