export const name="hurricane";
export const id="dl_77814b805ea54dba9dd9";
export const url=new URL("../icons/hurricane.svg?v=2212f8539b357abef573047424637fb3dbb25f9cb549421622f5a01bc77c132f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
