export const name="flowsheet-fill";
export const id="dl_e3edd569779ab682236a";
export const url=new URL("../icons/flowsheet-fill.svg?v=a0c898817bf77f77597ac4d7ad41914342c55de6dd1c58b759f1d67f77b15ab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
