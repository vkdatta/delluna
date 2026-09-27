export const name="subset-of-duotone";
export const id="dl_16eeba22d63a84f33b91";
export const url=new URL("../icons/subset-of-duotone.svg?v=67f26e9a871624fe01d58b74b4e2679f57d39cfaba61490d51ae69b792b799fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
