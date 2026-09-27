export const name="planet";
export const id="dl_3a436fbadede8f3aa145";
export const url=new URL("../icons/planet.svg?v=7430ae7b8ed6633511da6d009da22761207a54e9ba809210922af1e23b1c47f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
