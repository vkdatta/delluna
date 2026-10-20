export const name="plug";
export const id="dl_f9aa33520b4c45cdaf16";
export const url=new URL("../icons/plug.svg?v=76c834ffd0fcee7cc13a81b4d0efa25b78ab34442be14af085394821cf006639",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
