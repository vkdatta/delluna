export const name="envelope-simple-duotone";
export const id="dl_c72fc38b2dfe4427a87d";
export const url=new URL("../icons/envelope-simple-duotone.svg?v=53b09cc5514b3f2eded3dceaa42070b243c88e28e865618d8724dd50f8ffbb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
