export const name="football-fill";
export const id="dl_e5212412b8314fff8d06";
export const url=new URL("../icons/football-fill.svg?v=edd3d078b315b6c320e8658e24cd3d67fb20f9cf2118d1c3e734c55c3ebd56b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
