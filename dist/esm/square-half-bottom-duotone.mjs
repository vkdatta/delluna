export const name="square-half-bottom-duotone";
export const id="dl_1514d06a57f54c56a519";
export const url=new URL("../icons/S/square-half-bottom-duotone.svg?v=0d17ad1518eecb5d035b8986db0a3e993a010148d32d7a520557545a041edd89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
