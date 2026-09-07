export const name="dog-duotone";
export const id="dl_f5f4fb11dd1f418e87fe";
export const url=new URL("../icons/dog-duotone.svg?v=f3344516c755ddee756a856c809892f6d51ccac3bfa3b7d00ec0eb3616d07782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
