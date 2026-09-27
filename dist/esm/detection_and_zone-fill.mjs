export const name="detection_and_zone-fill";
export const id="dl_890fe01a6bcf606f26d7";
export const url=new URL("../icons/detection_and_zone-fill.svg?v=9246e25cd08e236d4b91c1dc6c0e9d926068015e1107d033947a76a468a6fdad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
