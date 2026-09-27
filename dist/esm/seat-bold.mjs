export const name="seat-bold";
export const id="dl_912bd09f480583f7ef21";
export const url=new URL("../icons/seat-bold.svg?v=84f4f6bc3d204e5d316a39f8063255792c694fabfb5a0f9c376cc6db46565f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
