export const name="rss-simple-fill";
export const id="dl_c9120724140b47b9a9bb";
export const url=new URL("../icons/rss-simple-fill.svg?v=20c11d5985a6314fa9a2c8fca5c84ad777e4b681da3f4b16353b70189a9563f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
