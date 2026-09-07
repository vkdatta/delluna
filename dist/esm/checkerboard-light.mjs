export const name="checkerboard-light";
export const id="dl_aed73dd364244a74b441";
export const url=new URL("../icons/checkerboard-light.svg?v=0aded72d60b774676c2ad865c162c34d48d2e8ffe3610db48e4ab7f44f6dbcc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
