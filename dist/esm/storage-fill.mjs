export const name="storage-fill";
export const id="dl_32ab125403b73b7bfeb1";
export const url=new URL("../icons/storage-fill.svg?v=b36ee5fb2f3311cdcfc40c841c449930d65a2140fba975d88b4ade239250b3f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
