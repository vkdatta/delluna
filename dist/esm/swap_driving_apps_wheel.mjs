export const name="swap_driving_apps_wheel";
export const id="dl_724f6504fff44ebb975b";
export const url=new URL("../icons/S/swap_driving_apps_wheel.svg?v=4fae124c2473f4ce34ea49f5e78c0563ee5669a4a46ab1fb8da359c87c9e355b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
