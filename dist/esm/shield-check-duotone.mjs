export const name="shield-check-duotone";
export const id="dl_127e3e2284086f0a96a9";
export const url=new URL("../icons/shield-check-duotone.svg?v=214f6d3c6de5802c7b32fb46fc67a9311b92c094bfca7dbf06e5074c6a4098ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
