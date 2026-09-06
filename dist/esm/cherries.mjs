export const name="cherries";
export const id="dl_8d5e962de90d4717b3de";
export const url=new URL("../icons/cherries.svg?v=b568ebce26c192c55fda5eaf7dd019ee4336236761ff5402cc988ff9b0aa16ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
