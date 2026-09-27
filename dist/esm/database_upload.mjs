export const name="database_upload";
export const id="dl_056f03e54688a8bb8def";
export const url=new URL("../icons/database_upload.svg?v=6c70acce5d9b66eceac4ce060e252c2857433e666c6945ced2782b2a6fb8c7e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
