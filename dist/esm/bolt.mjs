export const name="bolt";
export const id="dl_ebe8e6b27c85e655141c";
export const url=new URL("../icons/bolt.svg?v=4733160e5980c1e63bfa39a09c4d94cc676ba769a1059b5300e21a39a7800061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
