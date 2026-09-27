export const name="file-doc-bold";
export const id="dl_3468956b264e49a9980f";
export const url=new URL("../icons/file-doc-bold.svg?v=15218ba9422b8bf85e1c8b63e0fbaa1b1e607311af2e1d29d33bb5c1d000db16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
