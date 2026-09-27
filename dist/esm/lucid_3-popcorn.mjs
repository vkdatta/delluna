export const name="lucid_3-popcorn";
export const id="dl_44436830a5384b4d9c46";
export const url=new URL("../icons/lucid_3-popcorn.svg?v=a7fec1aa76d448fd29a84b85ee9f2556820f6a4b4b26e29a3991808e8952f7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
