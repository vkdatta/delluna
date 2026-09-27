export const name="file_map_stack-fill";
export const id="dl_229be65ee8ce601682b7";
export const url=new URL("../icons/file_map_stack-fill.svg?v=b034c3c76fc242c28e4c906315cef0f9fa01e3ecdaad1abc4b0d5df4bcca621f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
