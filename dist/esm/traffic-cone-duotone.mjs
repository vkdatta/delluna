export const name="traffic-cone-duotone";
export const id="dl_13dcebd39f02b90e2e38";
export const url=new URL("../icons/traffic-cone-duotone.svg?v=68d7ee7327902824504f4e48cf94b70797eaf7ec12bf3191c29116f9637efa3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
