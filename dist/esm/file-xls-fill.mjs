export const name="file-xls-fill";
export const id="dl_93e0477d9fa94ab5a8cd";
export const url=new URL("../icons/file-xls-fill.svg?v=87d1dca1eac16fbf6b06c6118cd2b34babe547ba890b7ca5f949b3bc9b2c4d10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
