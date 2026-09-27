export const name="format_image_right";
export const id="dl_6197b3f811ad1c3bba03";
export const url=new URL("../icons/format_image_right.svg?v=e6f174ad65ec6d2c8a619d964ad10f921526c3c47392bb7c3f801051fdd2aefd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
