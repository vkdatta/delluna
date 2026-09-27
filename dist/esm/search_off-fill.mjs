export const name="search_off-fill";
export const id="dl_5ace3414b716fe8dc046";
export const url=new URL("../icons/search_off-fill.svg?v=35075250348db2f04d7bc9e73da0e360e1c6c01c614a4ee00d36461d48aa318d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
