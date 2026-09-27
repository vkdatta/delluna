export const name="push-pin-slash-duotone";
export const id="dl_2da468ace68d4f1f92d4";
export const url=new URL("../icons/push-pin-slash-duotone.svg?v=1034b8574ebf03bdd279b097b031ee01666b6df2713248147dd0af23b26c7b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
