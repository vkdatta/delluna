export const name="file-sql-light";
export const id="dl_faf89ea8f4b44018b4d6";
export const url=new URL("../icons/file-sql-light.svg?v=b4689f0b79f5742d062b5c8f75e5befe47b83c85afe66e90025826a7aa9ce3e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
