export const name="folders";
export const id="dl_f487e11c39dd4d54907c";
export const url=new URL("../icons/folders.svg?v=36b164dda05b50eaecd3325301032e46c61f0eefb566eea97e2247ef87438274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
