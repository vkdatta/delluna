export const name="license";
export const id="dl_1d8997e65b9f7b5dfb5b";
export const url=new URL("../icons/license.svg?v=c39ee78cc94c52b3f0b5b58c7d2374d704355d1324bd4d56c9a6f1ebd5a91e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
