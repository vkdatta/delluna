export const name="medication_liquid";
export const id="dl_a48662a5047d1d2facec";
export const url=new URL("../icons/medication_liquid.svg?v=3ed1434321f14d52246e3ae8a68a0896ae3a2771fa6dbc889580b727482302bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
