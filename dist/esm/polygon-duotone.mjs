export const name="polygon-duotone";
export const id="dl_e358a68dd13b4334ac2a";
export const url=new URL("../icons/polygon-duotone.svg?v=573f207ac002c577af76c7e2b29f5fe116f648c69faf4454f9df614c89a88a78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
