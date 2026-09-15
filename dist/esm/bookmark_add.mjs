export const name="bookmark_add";
export const id="dl_97aa6030c3244706819a";
export const url=new URL("../icons/B/bookmark_add.svg?v=eb90c2848bcdbf10c9c61234b2fc89241f1c690c91ffdb8fc321cd79576e9c22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
