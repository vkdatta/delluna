export const name="wine_bar";
export const id="dl_decf51d3a4bf4871947e";
export const url=new URL("../icons/wine_bar.svg?v=007684faa969330cf3c0266453d8ed242067777d129d25ebc3651f23125da66b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
