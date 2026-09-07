export const name="microsoft-teams-logo-light";
export const id="dl_bdf127373a824d97b9a6";
export const url=new URL("../icons/microsoft-teams-logo-light.svg?v=6ff7fe53a2b272e5cf12057714d468161d3f5356ca3ddf5272e5a13690739284",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
