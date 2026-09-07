export const name="factory-duotone";
export const id="dl_718736363516437f96dc";
export const url=new URL("../icons/factory-duotone.svg?v=39141f1b2caca5afef2dc243ec0c5c97c3243a58d7f9fd7d5537d0e2e1a55139",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
