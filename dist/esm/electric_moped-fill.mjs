export const name="electric_moped-fill";
export const id="dl_c1ebc9413b84679788a6";
export const url=new URL("../icons/electric_moped-fill.svg?v=6c8c4552d3cfca59736acf4454b37cfc775ece770f674fb732bea49d514d09e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
