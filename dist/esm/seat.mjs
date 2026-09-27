export const name="seat";
export const id="dl_95964e19168e0e7b06e8";
export const url=new URL("../icons/seat.svg?v=646992d3eac4fd78700ea2474328372f53f957a014173ce277e4f596fe3bc9f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
