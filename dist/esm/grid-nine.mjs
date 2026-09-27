export const name="grid-nine";
export const id="dl_7305cbf17d1a40f28e11";
export const url=new URL("../icons/grid-nine.svg?v=c44c459381ce1fb0cabbe0427fdbfc4832d0b11dcde43ad6b2165954fff47c3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
