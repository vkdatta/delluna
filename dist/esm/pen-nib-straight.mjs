export const name="pen-nib-straight";
export const id="dl_145e8c13cde74dc2ac15";
export const url=new URL("../icons/pen-nib-straight.svg?v=df4910fc238b525a7eec2e8f16463786ff770880badf841167a2bcf8435fde64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
