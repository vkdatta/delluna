export const name="user-focus-duotone";
export const id="dl_d14d693783ecce767531";
export const url=new URL("../icons/user-focus-duotone.svg?v=7e57bb9420623fee37e72521257d99d0cd599fef65d248c6666095c0eefd0008",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
