export const name="flower-tulip-duotone";
export const id="dl_aaa66fc90e8645a09625";
export const url=new URL("../icons/flower-tulip-duotone.svg?v=e191aa2c73cd465ba22f56ffcfad9f68fd5f41e5e91bd57bd42caa19c30991ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
