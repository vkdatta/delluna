export const name="input-fill";
export const id="dl_b38505edd7a9e2a3f053";
export const url=new URL("../icons/input-fill.svg?v=44640201e50a5d8a4dd10468c23fba84429638c6415bca92bd8f21d00bc36b20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
