export const name="search";
export const id="dl_ddd4bb51c362da338c39";
export const url=new URL("../icons/search.svg?v=087db16aac4e4a9fa6fd3d5c0d6877711738ebc285b4133f55aa5805c59996ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
