export const name="file-csv-duotone";
export const id="dl_b09e3e71558948429a97";
export const url=new URL("../icons/file-csv-duotone.svg?v=b275b8a15f756f8969cee318f54215a3f1b0faccb6defeb8211b72bd9da7b59e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
