export const name="popcorn-fill";
export const id="dl_9742603734874b2aa762";
export const url=new URL("../icons/popcorn-fill.svg?v=625848afecdcc9d077e59f6dabff93777a707aee10ce9e1a361b22999dc5c6bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
