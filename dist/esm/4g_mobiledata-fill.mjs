export const name="4g_mobiledata-fill";
export const id="dl_d9869d63e5dd4adfa026";
export const url=new URL("../icons/4g_mobiledata-fill.svg?v=4014797a8988aa7d60cce14b58677c681a6c2d79bb4e58d234d632f76f48213a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
