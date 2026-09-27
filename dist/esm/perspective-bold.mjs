export const name="perspective-bold";
export const id="dl_857d46caab824aff8f56";
export const url=new URL("../icons/perspective-bold.svg?v=5a9e42cc770900fde0aa793a2a14c2dfe07abce1b69f486ae6c602504d280d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
