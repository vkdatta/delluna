export const name="number-square-seven-fill";
export const id="dl_6f2e34cdd37d4be4ae38";
export const url=new URL("../icons/number-square-seven-fill.svg?v=c66d3c8102649fff8a50e241182d6c924e64537b9a0335ff2816ba516a6ebf25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
