export const name="pentagon-bold";
export const id="dl_fd09de2d38334e38ab49";
export const url=new URL("../icons/pentagon-bold.svg?v=1f41c583b307d861e0d22319758b8d758c7b2325ed4ea36b7ea28f41190cdbb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
