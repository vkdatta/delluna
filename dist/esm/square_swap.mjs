export const name="square_swap";
export const id="dl_5667428e68ae41858541";
export const url=new URL("../icons/square_swap.svg?v=7ce8560bf8d93729c00058e0d72895fb0ca84565a5cf1d31337b6ce5f0a25098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
