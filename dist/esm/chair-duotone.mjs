export const name="chair-duotone";
export const id="dl_c4416fc9b3d34f959a3c";
export const url=new URL("../icons/chair-duotone.svg?v=ae49f5fbe139c552e00e6230a623978744025aa8b2471e0ebdcd79b80c36f670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
