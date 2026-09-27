export const name="parking_meter";
export const id="dl_e0eee86cd9a04651d0b2";
export const url=new URL("../icons/parking_meter.svg?v=a91aea9724b08c31f633aaed4632971852447d5b588fb1c7a39fc27b099650a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
