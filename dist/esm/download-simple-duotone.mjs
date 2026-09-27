export const name="download-simple-duotone";
export const id="dl_c5e2af5fbee34c659bb3";
export const url=new URL("../icons/download-simple-duotone.svg?v=606cd6edadd2be1940beed2093c0d91e0187be85fae3c567b8d5efba7fa40d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
