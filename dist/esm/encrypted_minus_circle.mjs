export const name="encrypted_minus_circle";
export const id="dl_8cd3780188200cc864cb";
export const url=new URL("../icons/encrypted_minus_circle.svg?v=05def560824ed239823f87d533172791f90f59ec982f45189e6f1bdebb1df9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
