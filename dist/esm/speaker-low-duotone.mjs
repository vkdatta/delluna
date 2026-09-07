export const name="speaker-low-duotone";
export const id="dl_63ad97b659d444abb493";
export const url=new URL("../icons/S/speaker-low-duotone.svg?v=a936dc1d3bdbe2e5271315d9374847a8870abf44f74bc0b6f1baca05ebd0a98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
