export const name="rss-fill";
export const id="dl_89bf4f8a2a904d289e59";
export const url=new URL("../icons/rss-fill.svg?v=69bae8fd86403e9468373888def31c9fcd1d12f315f0abc869ce48c03e10f080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
