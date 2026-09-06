export const name="rewind-circle-duotone";
export const id="dl_23c87f82b62f4fec91d8";
export const url=new URL("../icons/rewind-circle-duotone.svg?v=0e04d249e8c6653b1360c511bd5ffbfe514b51c391ebc69d880e047c30bfa386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
