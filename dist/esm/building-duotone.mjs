export const name="building-duotone";
export const id="dl_bdbab3f0ea8444afb471";
export const url=new URL("../icons/building-duotone.svg?v=06c69d6a0e55cd0c9a3bc039dc85b6e723341f7a8e4a20a029947ff8e15cecc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
