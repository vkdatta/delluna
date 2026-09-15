export const name="cell_merge";
export const id="dl_f3951e8fb22448ba8070";
export const url=new URL("../icons/C/cell_merge.svg?v=6a8133ee61a358a81ccdbf984bfb897267d8e392ca8923ce6181697a71144da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
