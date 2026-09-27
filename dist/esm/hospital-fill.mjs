export const name="hospital-fill";
export const id="dl_a62acd5d31e0445a9ca5";
export const url=new URL("../icons/hospital-fill.svg?v=dc4012d2ec0aa262cc0556035654aa2e060f35c6872fd372e64556f3f658b620",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
