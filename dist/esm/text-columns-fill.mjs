export const name="text-columns-fill";
export const id="dl_7d8de80b13e6387b7bab";
export const url=new URL("../icons/text-columns-fill.svg?v=89230fcefc4ef43e8560d5cdfaa1650cdcd685e672dada9d92c1bcad6a250e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
