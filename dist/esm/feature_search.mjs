export const name="feature_search";
export const id="dl_c1f298875f5699d809a6";
export const url=new URL("../icons/feature_search.svg?v=61be451eff8c2a2e290d093a927f9ccdeb3f5941f8eb55b9e198ccac8aa61902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
