export const name="seal-check-duotone";
export const id="dl_41a7ff4ccb064af0a603";
export const url=new URL("../icons/S/seal-check-duotone.svg?v=45897ac520115a7af6372864e0df6e4c1636af59c75de7bc230d660efb46029d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
