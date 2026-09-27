export const name="text_ad_off";
export const id="dl_9dcbb2f05fe086b83128";
export const url=new URL("../icons/text_ad_off.svg?v=178b3c06ae7078522d1431bf90e4bcaa5cf0b1b4408c7abdaf32a0050be4c228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
