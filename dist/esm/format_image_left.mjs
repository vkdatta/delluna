export const name="format_image_left";
export const id="dl_1a91d7872ba749709bd2";
export const url=new URL("../icons/format_image_left.svg?v=c1ef45aaa2f407cf8ca6d046b8a30f834c8ad118ba6a99ce9e468f7186a5142a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
