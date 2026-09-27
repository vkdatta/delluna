export const name="pipeline";
export const id="dl_1c9104c9776c4707b589";
export const url=new URL("../icons/pipeline.svg?v=06c5c98bc19b65062704179c99035c098b4e0c381630e3c1d26c2c3e55a1806a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
