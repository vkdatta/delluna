export const name="corners-in-bold";
export const id="dl_1922384c686641179220";
export const url=new URL("../icons/corners-in-bold.svg?v=2664fc88c8de3564849e732f5950232109cd7d201b93ede1e516e60931e56300",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
