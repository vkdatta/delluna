export const name="prescription";
export const id="dl_b4e361e13b6d4364827d";
export const url=new URL("../icons/prescription.svg?v=cadce408e2031a54313b4c79452356a7cb54ecbdc6f80b8446f42152c78b6be4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
