export const name="diversity_1-fill";
export const id="dl_a40f5ff9425572dcb39d";
export const url=new URL("../icons/diversity_1-fill.svg?v=194e391d9e9459cbebefaf65d3c13e760c850412826f874030bc462457355f18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
