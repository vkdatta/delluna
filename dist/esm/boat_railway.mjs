export const name="boat_railway";
export const id="dl_4e9ac3af7a9feb28918a";
export const url=new URL("../icons/boat_railway.svg?v=8f0ad77eefc4317b7e8bfca3502cb14e050b31d3cd6c79076baec0f198f29b96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
