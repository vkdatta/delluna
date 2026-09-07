export const name="drop-half";
export const id="dl_88372fb2316d44b0b7d3";
export const url=new URL("../icons/drop-half.svg?v=4d36b0dda9620d833768a18d812506328492ce08afbf4501a4f0bbf91b9fea15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
