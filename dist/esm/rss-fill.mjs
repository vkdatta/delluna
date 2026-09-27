export const name="rss-fill";
export const id="dl_89bf4f8a2a904d289e59";
export const url=new URL("../icons/rss-fill.svg?v=1465e55da6fe4d37c39de9e91f5da24a98464eef8ff49946e55e9bc3f5014108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
