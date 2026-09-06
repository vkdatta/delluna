export const name="align-left-duotone";
export const id="dl_c74ebfb920804023b950";
export const url=new URL("../icons/align-left-duotone.svg?v=f235e751939609f349a06c5744412823966f776394652aca2099f82036ac3ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
