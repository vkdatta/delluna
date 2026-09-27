export const name="image-fill";
export const id="dl_0b92cf92957a473badb2";
export const url=new URL("../icons/image-fill.svg?v=cfc6f2920b4d08e1df17d2215d322a2b51f80ef99aabf04ba9f902c66ba1f41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
