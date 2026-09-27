export const name="number-square-zero-fill";
export const id="dl_ef07fa353c7e471bacc6";
export const url=new URL("../icons/number-square-zero-fill.svg?v=11d826d62871ee381f5dd19800bdbf7f324b6a887f5e4843320ebefeb308aafd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
