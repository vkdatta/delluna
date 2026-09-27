export const name="text_rotation_none-fill";
export const id="dl_9c7552440fedd93c30af";
export const url=new URL("../icons/text_rotation_none-fill.svg?v=da1f806a084985afccb7ee01c2be2e97f1d9fa0406469df23400d609d15593e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
