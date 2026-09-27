export const name="tree-evergreen";
export const id="dl_939dd78ae5f732456a47";
export const url=new URL("../icons/tree-evergreen.svg?v=5eb2032aebc47f6bc5dd6ea76b9ae5af967a366520bca16a9ac4e91dcc628280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
