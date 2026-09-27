export const name="magnifying-glass-minus-fill";
export const id="dl_54ecc7e3d02b4a89b143";
export const url=new URL("../icons/magnifying-glass-minus-fill.svg?v=d41b867630a612f049bce3498c3737c5eeabb5f8b6245bc15dba4709d3d8fd8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
