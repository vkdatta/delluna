export const name="shoppingmode-fill";
export const id="dl_ed6402e78e5f800bcb91";
export const url=new URL("../icons/shoppingmode-fill.svg?v=ca30117bb55567b2bcd79c0d988c0c52d4f5c64d8e3c17d7046f3c124ed6797b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
