export const name="cheers-light";
export const id="dl_7dc4e18d90a0496b8389";
export const url=new URL("../icons/cheers-light.svg?v=1adccef944db25515e86f7956c24a965368030d75fda320f0c780bba171003a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
