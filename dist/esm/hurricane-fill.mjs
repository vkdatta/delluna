export const name="hurricane-fill";
export const id="dl_643818e01c7843a69aa0";
export const url=new URL("../icons/hurricane-fill.svg?v=51eaec91734a834e00465cbdc7077521454272d3b32592a6e4b268b17ed7a98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
