export const name="file_export-fill";
export const id="dl_e88eb919f352dc12e717";
export const url=new URL("../icons/file_export-fill.svg?v=d422f880883d11523825c0cdbd001f471fd5535f313ad317819ae08a4a79fcc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
