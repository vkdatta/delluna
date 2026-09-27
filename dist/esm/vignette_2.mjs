export const name="vignette_2";
export const id="dl_385b69b83f8449c515ab";
export const url=new URL("../icons/vignette_2.svg?v=e0d9524e5302e309ad76226d3740b7c68bdd38efe7c45b0d9327dccb1903c526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
