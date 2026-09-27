export const name="number-circle-nine-bold";
export const id="dl_12ee073e949b461aaeca";
export const url=new URL("../icons/number-circle-nine-bold.svg?v=d3870e1914501bb35f58cd8b52c4a6bc0b1a149725ef216a01c9a2986fdc57ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
