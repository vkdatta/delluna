export const name="dry_cleaning-fill";
export const id="dl_356272bc83e30c3a2616";
export const url=new URL("../icons/dry_cleaning-fill.svg?v=c7bff096b718bc5dd877d35a9957447c776d1c5cb86310d9b455fe8fffb2b7e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
