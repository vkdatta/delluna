export const name="dots-nine-bold";
export const id="dl_71679cf931b044f09d8a";
export const url=new URL("../icons/dots-nine-bold.svg?v=cd628250516530dae5bfa71bb11ff124a87365f2ce7cfa10ac8a4ab49dde57b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
