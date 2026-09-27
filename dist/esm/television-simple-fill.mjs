export const name="television-simple-fill";
export const id="dl_71ce9058f416baaff584";
export const url=new URL("../icons/television-simple-fill.svg?v=19201fa83ffcce2543f0fcd19761d0340404694971d1cd6d2f6ea2b5aa3bf980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
