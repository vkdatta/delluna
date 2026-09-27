export const name="high_density";
export const id="dl_4ce0cd9e2a9618ac8db8";
export const url=new URL("../icons/high_density.svg?v=1f8f10ea6eca1478427248a3b2bdd3641b88f294d762000704899f2e287abc49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
