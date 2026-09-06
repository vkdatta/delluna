export const name="file-cloud-duotone";
export const id="dl_34021d70f16243399047";
export const url=new URL("../icons/file-cloud-duotone.svg?v=e4e5f7eec0ed8b31859ed27f6e52dc016f49e9e52af0f08ba5bd1c52d4168377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
