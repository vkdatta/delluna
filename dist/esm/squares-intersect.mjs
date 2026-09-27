export const name="squares-intersect";
export const id="dl_d7014c6be2fd499a8457";
export const url=new URL("../icons/squares-intersect.svg?v=6a9586e395a490b6a8db44165740eb61e650891620a6f5eb50f5bd2785c31280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
