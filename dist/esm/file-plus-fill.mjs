export const name="file-plus-fill";
export const id="dl_1ae9f331e17a40fc9094";
export const url=new URL("../icons/file-plus-fill.svg?v=f3122e2f1912627e7469220d73b7159e11799a5a92548e7bb2b0ac2af9fb07b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
