export const name="magnifying-glass-bold";
export const id="dl_4548b12dcd2f44f1b02a";
export const url=new URL("../icons/magnifying-glass-bold.svg?v=b73e393b20bff0aaee96b9e325d0276fe1ab5fc81b5080633a95827bd14ebae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
