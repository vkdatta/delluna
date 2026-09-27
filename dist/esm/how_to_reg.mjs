export const name="how_to_reg";
export const id="dl_693f6bd6e53db10e6006";
export const url=new URL("../icons/how_to_reg.svg?v=401584f45df2d14c1d676e700c538536220555e3f27412e41b8324ba6a219168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
