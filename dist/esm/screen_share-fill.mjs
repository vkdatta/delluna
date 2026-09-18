export const name="screen_share-fill";
export const id="dl_6f0db272f3464598aac1";
export const url=new URL("../icons/S/screen_share-fill.svg?v=a587b99b1ba307ca97765f82f31890289d40e580c5a8565d66ae573807ac2d5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
