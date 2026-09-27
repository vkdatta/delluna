export const name="file-xls";
export const id="dl_79c84f83461b47a7beea";
export const url=new URL("../icons/file-xls.svg?v=7254769d38f250b3466a86ba67e3469d2e0c9919cc1ad7d29709bab20b06304e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
