export const name="number-circle-seven-fill";
export const id="dl_344dc294ce334f8cafa0";
export const url=new URL("../icons/number-circle-seven-fill.svg?v=52175d2ff5150d2c5afdea2168f70b49f1d3621ec74a68ae3afddf02073761ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
