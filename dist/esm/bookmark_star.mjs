export const name="bookmark_star";
export const id="dl_df65f0e7b2784bc49904";
export const url=new URL("../icons/bookmark_star.svg?v=e36dd63d16c2c0b1060cf505034297524b21d6db1a3b672be55542ca8e260177",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
