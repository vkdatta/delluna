export const name="battery_low-fill";
export const id="dl_26c19a3d5b89a7ae8593";
export const url=new URL("../icons/battery_low-fill.svg?v=b8bd2053aaddc965305e7e0229e317a1b194380a97d772a74b9edaa4f26a948d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
