export const name="shield-plus-light";
export const id="dl_44b8e3186a6ec6e61cb9";
export const url=new URL("../icons/shield-plus-light.svg?v=3abdb161fdbdf237af6913e40e1cf035e96cea32609cc72fec282772481aea20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
