export const name="format_image_inline_right";
export const id="dl_0cdca6cc1a63a481b334";
export const url=new URL("../icons/format_image_inline_right.svg?v=8d492cc12bc393a64f84091d06b51e198450901b84e93d6a6c2ddf37d1d2a5be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
