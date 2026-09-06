export const name="bookmark-simple";
export const id="dl_db4d186fa39a466c996e";
export const url=new URL("../icons/bookmark-simple.svg?v=493a836009ab98f8d4ca84f088cc03f2785cdee86daa1643e003865ff3168b41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
