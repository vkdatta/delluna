export const name="gesture-fill";
export const id="dl_6fdb06f2b33dd272ac5f";
export const url=new URL("../icons/gesture-fill.svg?v=6eb1d690d3d50cf86a106da39ef310e6556410461645ce67548816b73bb0b19e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
