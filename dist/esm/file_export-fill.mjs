export const name="file_export-fill";
export const id="dl_6fe5831e6a2f15c92316";
export const url=new URL("../icons/file_export-fill.svg?v=f33ce650a4c6b38e53a865e97513d127ab17281cbf917d6985680a388fd850b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
