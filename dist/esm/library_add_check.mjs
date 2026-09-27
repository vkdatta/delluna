export const name="library_add_check";
export const id="dl_85eb977e2e6980629400";
export const url=new URL("../icons/library_add_check.svg?v=eea04b8291de8c41a7c4709371874daa25aa47a0b0ac2d72fae15dae5a8e471f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
