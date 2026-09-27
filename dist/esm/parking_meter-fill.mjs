export const name="parking_meter-fill";
export const id="dl_fb8fb8a3b4df660cdbff";
export const url=new URL("../icons/parking_meter-fill.svg?v=459d7fb1c6b7acd340e86c82bf7bd537ad08e15d223dd82cdc54f16ec0c69320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
