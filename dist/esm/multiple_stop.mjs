export const name="multiple_stop";
export const id="dl_ab91366b0de1bc6010ee";
export const url=new URL("../icons/multiple_stop.svg?v=148441fc14f47ab55a309ee0d6c7f1e63b43022bf68b688fb52d5cfc0e5ffaf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
