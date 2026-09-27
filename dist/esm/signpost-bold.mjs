export const name="signpost-bold";
export const id="dl_d030434249f2b6a392c4";
export const url=new URL("../icons/signpost-bold.svg?v=d3abd6312182844170e9e58acf94825a076b430015ef8626773f05e11a961faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
