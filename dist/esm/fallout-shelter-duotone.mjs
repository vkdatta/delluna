export const name="fallout-shelter-duotone";
export const id="dl_a1486f53f08847afa925";
export const url=new URL("../icons/fallout-shelter-duotone.svg?v=ddefce1d8393ab94e237a94ee014a2a6e66630d25168638a4ba007ab65cf8295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
