export const name="lucid_3-printer";
export const id="dl_28997569ec174f92be79";
export const url=new URL("../icons/lucid_3-printer.svg?v=711ad9f6b77eec1e0fb55b93576c1e21191329e34ce80cf9829e27acb5821e34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
