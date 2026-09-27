export const name="file_save_off-fill";
export const id="dl_0d9f06f7cf4bb4d4880a";
export const url=new URL("../icons/file_save_off-fill.svg?v=36377966a34eb76c192e03975221b99e9b614ad49fc38b2ade942516bd7be606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
