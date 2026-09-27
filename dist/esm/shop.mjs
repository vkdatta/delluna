export const name="shop";
export const id="dl_d83aecec240a46de6bc2";
export const url=new URL("../icons/shop.svg?v=20348ee422767953d6e70019b50bbc3f3e9214e820f6987782886760cc70cdfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
