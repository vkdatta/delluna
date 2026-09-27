export const name="video-camera-slash-duotone";
export const id="dl_c6d41596cb36ea4fb7e7";
export const url=new URL("../icons/video-camera-slash-duotone.svg?v=9d4e27c60610831572bfce951c87aaf11147b57036a35eb63a91c416a33b3016",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
