export const name="browse_gallery-fill";
export const id="dl_6548c1e54fc3277c3225";
export const url=new URL("../icons/browse_gallery-fill.svg?v=30b583682c13061e7072a04b7d889270a6ac52e46eb51c8253a0387a61f830b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
