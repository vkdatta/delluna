export const name="file-sql-bold";
export const id="dl_b03f94440cc84f12a9e0";
export const url=new URL("../icons/file-sql-bold.svg?v=2dc69a6595e0585c0f7cc4a4c47c0e107a7839be2511e70e804396a73114ad8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
