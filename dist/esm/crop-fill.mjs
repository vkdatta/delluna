export const name="crop-fill";
export const id="dl_6a7953cc450f46e8beb8";
export const url=new URL("../icons/crop-fill.svg?v=4da899cce23a6717b173ac7e50728163e59603b0661889590c6fd292a72a94a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
