export const name="arrow-up-right-bold";
export const id="dl_fd6411090d7f4be58764";
export const url=new URL("../icons/arrow-up-right-bold.svg?v=28687c40e5980d0321a33fe5021d2060fa49633d65127f80009f8c44cbe95418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
