export const name="pinboard";
export const id="dl_b4f3b4a7be9a03739152";
export const url=new URL("../icons/pinboard.svg?v=aa6f226eb74f3831c864c9924151c4301299b6f3fc812454ffb932bdc9b93c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
