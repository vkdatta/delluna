export const name="lucid_3-phone";
export const id="dl_cf25a60dab584949b971";
export const url=new URL("../icons/lucid_3-phone.svg?v=9574643dcaf46edd11591606b385a43b0e353c25a803bf5bd063e67744df9527",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
