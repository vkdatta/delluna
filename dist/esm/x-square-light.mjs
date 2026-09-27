export const name="x-square-light";
export const id="dl_e243a6648a8c9ca33050";
export const url=new URL("../icons/x-square-light.svg?v=100c55e557268bf4086003e4a98fe87cca1a79305f41587d711390d7afecfff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
