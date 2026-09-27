export const name="file_json-fill";
export const id="dl_155b9b591dc965c3907b";
export const url=new URL("../icons/file_json-fill.svg?v=f6adf6c77582127cb02d1d89aad8e52669c63d978dbd98053fb5e353e8f226e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
