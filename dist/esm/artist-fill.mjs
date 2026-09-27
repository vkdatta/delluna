export const name="artist-fill";
export const id="dl_dbd6df5089c36f35a801";
export const url=new URL("../icons/artist-fill.svg?v=edc04c3b9b900a15a422e330d208404e2bf372381b1e7399ebfa9a80b39fd91d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
