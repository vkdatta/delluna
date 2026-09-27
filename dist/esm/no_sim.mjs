export const name="no_sim";
export const id="dl_95edef20fdbc6b64064a";
export const url=new URL("../icons/no_sim.svg?v=21893b713a1b2a622a1cb3292511c23b7fb9f1d255af5b29d3b5d0091bdacc06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
