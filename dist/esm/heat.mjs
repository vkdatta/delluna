export const name="heat";
export const id="dl_49889b794c69ad9a2063";
export const url=new URL("../icons/heat.svg?v=97d1bdf0530d6c3774d1cb683d1d4f418f2b82c48194548e114e69247effe7db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
