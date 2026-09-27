export const name="speed_0_2x";
export const id="dl_bd86d23af5dad6fc265f";
export const url=new URL("../icons/speed_0_2x.svg?v=176853d145498de6ddb51d4ebd5c5b19d6dcca020c1c9e0f4f46a345704c2a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
