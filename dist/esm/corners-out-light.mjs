export const name="corners-out-light";
export const id="dl_3bc9b2b9ed334428a629";
export const url=new URL("../icons/corners-out-light.svg?v=915923c1748ef0f8d41ff134d33338a061bcfe7a22bdb282202281753841c282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
