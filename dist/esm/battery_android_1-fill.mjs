export const name="battery_android_1-fill";
export const id="dl_1ee28f7eff8b3de15cfc";
export const url=new URL("../icons/battery_android_1-fill.svg?v=bee9210646c2e8387727e4f4ddca4c2d050355625341c854454af3e0da04e915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
