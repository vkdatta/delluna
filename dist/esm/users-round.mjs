export const name="users-round";
export const id="dl_8cc5642fc95d40c1afb7";
export const url=new URL("../icons/users-round.svg?v=53158dd4cbabb3059225b87fee99cb936f258e9cc5349fab37d2f3c45aff198d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
