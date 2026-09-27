export const name="detector_battery-fill";
export const id="dl_72f0dc886e79360f37d0";
export const url=new URL("../icons/detector_battery-fill.svg?v=a0e5e769b70577e4f576ea380b30f0c2223971268b7e05d4baf8ad35267b1157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
