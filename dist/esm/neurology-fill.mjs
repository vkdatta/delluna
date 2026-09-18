export const name="neurology-fill";
export const id="dl_1d68cab14a7142c38b14";
export const url=new URL("../icons/neurology-fill.svg?v=9be81b53887c398aedd7cdbd98d6a3fb42cd9f8ef51818c571156df6ebc32885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
