export const name="drop-half-bottom-fill";
export const id="dl_112796ef3f9e41f2a242";
export const url=new URL("../icons/drop-half-bottom-fill.svg?v=d9a7aebe056115fcb48877b8d9ad110ba11e558a9544a6750d3c8ebbe02d4690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
