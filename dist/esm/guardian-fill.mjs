export const name="guardian-fill";
export const id="dl_6e19df9fec8e435aa70d";
export const url=new URL("../icons/guardian-fill.svg?v=cdb4ba576fa7b8de923cdbad86f1cd3e6fc1e02f7a5730276c3774b68b43df1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
