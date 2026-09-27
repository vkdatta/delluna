export const name="mask-happy-bold";
export const id="dl_8ce250383cb04684ae42";
export const url=new URL("../icons/mask-happy-bold.svg?v=cad98b2cf892ab54aa50820cbe500d2c487e16dd534fc25bb5ecd6162f98082c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
