export const name="file-xls-fill";
export const id="dl_93e0477d9fa94ab5a8cd";
export const url=new URL("../icons/file-xls-fill.svg?v=be79862aabc4b66f261a6fa56ca305b015f6f4cae3ee278f5830e6a5e563480f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
