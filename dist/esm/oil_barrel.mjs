export const name="oil_barrel";
export const id="dl_2d3e80e2cdff66ebb876";
export const url=new URL("../icons/oil_barrel.svg?v=c44456a0a1d149cf5f75056dad16c4f8cdad067d4addb283cb008c7bc8983772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
