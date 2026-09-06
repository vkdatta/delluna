export const name="microsoft-powerpoint-logo-duotone";
export const id="dl_e732b9beb4a84e479b52";
export const url=new URL("../icons/microsoft-powerpoint-logo-duotone.svg?v=9672668a870bc513d8a3f5f9ed5e5e566b71b958d3b2e219b6dcb81645fa0e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
