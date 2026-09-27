export const name="shield-check-fill";
export const id="dl_98915328730a5f7d8a34";
export const url=new URL("../icons/shield-check-fill.svg?v=521cdbda4ab6877d61ffc27080f7af7bf3a83e4863fe3bb0fe04b45710f7b6b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
