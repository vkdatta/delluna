export const name="star-four-light";
export const id="dl_cbc7b946ef9a765f9a7e";
export const url=new URL("../icons/star-four-light.svg?v=bacf17a83e1840182df7555e5b22df7d3776bdc594aad7a1d160806898d4c888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
