export const name="file_json";
export const id="dl_c3450bce29c08f498eac";
export const url=new URL("../icons/file_json.svg?v=093b5cc9633d7be68bece7c270db2fbd1fdc970fe4a2fec4fe85d4fb2b5fce21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
