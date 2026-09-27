export const name="fiber_new";
export const id="dl_4d7b38975507188f70b4";
export const url=new URL("../icons/fiber_new.svg?v=298888b1e998527df9e8e7a75c372c2bcd814fbdd870bf5672641f5fde4d2b59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
