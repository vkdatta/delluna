export const name="directions_boat-fill";
export const id="dl_c459407c624a6d3b93d1";
export const url=new URL("../icons/directions_boat-fill.svg?v=c6966707b49321521d54ae9d991e7cf4027dcd560d886a9ab2b350a828826b3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
