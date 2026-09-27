export const name="wifi-slash-duotone";
export const id="dl_285285fc3efc5cac5ad4";
export const url=new URL("../icons/wifi-slash-duotone.svg?v=a7c274c37949685f4ef5ff698c93a8f14fd3f30d8f4ed8927d222f211817a903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
