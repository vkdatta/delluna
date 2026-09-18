export const name="local_atm";
export const id="dl_2b6ca9a87469469bba39";
export const url=new URL("../icons/local_atm.svg?v=be5f55d9c60b022aac80935d635ef547b263928406bc3d3a4d6e6915f620af56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
