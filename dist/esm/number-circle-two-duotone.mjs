export const name="number-circle-two-duotone";
export const id="dl_52c9e8e674984759902d";
export const url=new URL("../icons/number-circle-two-duotone.svg?v=585c6ed25a33ed07852056196e252081d4074d53346c4c8b7641e6f777bccb91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
