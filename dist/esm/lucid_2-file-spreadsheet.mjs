export const name="lucid_2-file-spreadsheet";
export const id="dl_e6d1d57fff6140718fcb";
export const url=new URL("../icons/lucid_2-file-spreadsheet.svg?v=5593f6ba856a37bd0fe0aa867ecc5f2d7a97da834c266b303a86da1bc59e03d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
