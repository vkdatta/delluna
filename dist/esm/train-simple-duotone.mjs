export const name="train-simple-duotone";
export const id="dl_f05a84727f8438b6ce45";
export const url=new URL("../icons/train-simple-duotone.svg?v=33f4d4401250aac00eb3a7db85a60b4bac463255a5c1299eb27ece2323333df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
