export const name="3p-fill";
export const id="dl_84a99d2ec1b987e06200";
export const url=new URL("../icons/3p-fill.svg?v=53ab36a28025204cde264c24e28451ae7e946815f268c883a2a36c2ba5da9c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
