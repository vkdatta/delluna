export const name="shield-checkered-duotone";
export const id="dl_6edb20f527a18e48ea43";
export const url=new URL("../icons/shield-checkered-duotone.svg?v=2c2f1cdfd8b0b384eac2b8a2a0909fc9479aef2411480422ed3ccb0697a03457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
