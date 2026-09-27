export const name="list-magnifying-glass";
export const id="dl_285efe0b6b1046d19827";
export const url=new URL("../icons/list-magnifying-glass.svg?v=952e1ddfe60e367295dd1963897f0a9fe2db7419e862ac2ce148d7b7bd4c9331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
