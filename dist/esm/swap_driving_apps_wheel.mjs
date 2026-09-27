export const name="swap_driving_apps_wheel";
export const id="dl_19bdc03639d3f23657e0";
export const url=new URL("../icons/swap_driving_apps_wheel.svg?v=16e2f3e08d5964bc68b20b2da1e2bb8d0e2293aca51db0bc7f011e7603a56470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
