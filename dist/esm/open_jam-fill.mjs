export const name="open_jam-fill";
export const id="dl_0d17915e997c755403c6";
export const url=new URL("../icons/open_jam-fill.svg?v=1da776fa05a0f7b7a4cdf5e2ed81acd6491afa40103a91347961f0e990364d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
