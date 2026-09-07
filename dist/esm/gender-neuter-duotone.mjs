export const name="gender-neuter-duotone";
export const id="dl_dbfa48dde2ad4c29a3df";
export const url=new URL("../icons/gender-neuter-duotone.svg?v=85e10ef44b93db8b0b1d7c9c0a07af7f36e3541743b64ccba002a489c1cd2b94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
