export const name="perspective-bold";
export const id="dl_857d46caab824aff8f56";
export const url=new URL("../icons/perspective-bold.svg?v=1566054aff7299a3a72f91f9483e282f3fb6a4caeedea6ffa8f37f388f35a465",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
