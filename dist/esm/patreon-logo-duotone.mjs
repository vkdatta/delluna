export const name="patreon-logo-duotone";
export const id="dl_8ef3c2d530ad4c048fc7";
export const url=new URL("../icons/patreon-logo-duotone.svg?v=e025b4e929fc3d41fe744c70b033b1250570cf55d71d242cd2a418af62b78995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
