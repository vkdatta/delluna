export const name="pen-nib-straight";
export const id="dl_145e8c13cde74dc2ac15";
export const url=new URL("../icons/pen-nib-straight.svg?v=8737b96144d5d0d0921a9c01a7b911089e4ae5c6263856da79495406681e9236",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
