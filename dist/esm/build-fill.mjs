export const name="build-fill";
export const id="dl_44ff09edd47c384b7127";
export const url=new URL("../icons/build-fill.svg?v=0df5b58f97658b7ab00f8e173cf5d9aee02c3aa66fac09ccf7fe179118683f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
