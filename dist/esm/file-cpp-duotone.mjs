export const name="file-cpp-duotone";
export const id="dl_18dba5e111f547288670";
export const url=new URL("../icons/file-cpp-duotone.svg?v=ec8bcad789bf5671268fe60f97b33d73f59e570752688e198f65f06ff5aff619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
