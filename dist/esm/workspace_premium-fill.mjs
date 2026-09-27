export const name="workspace_premium-fill";
export const id="dl_eb3203ddbb932c1d4b93";
export const url=new URL("../icons/workspace_premium-fill.svg?v=b19e2112ef0d225f653823852f35de193b440aed662535dc24f5d285d4c34bcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
