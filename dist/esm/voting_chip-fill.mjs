export const name="voting_chip-fill";
export const id="dl_94995358bb6df75dfc80";
export const url=new URL("../icons/voting_chip-fill.svg?v=0e2945974b0dd8b81a71783891af6cd52d9a8008b77dccfd6639c215b873fb21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
