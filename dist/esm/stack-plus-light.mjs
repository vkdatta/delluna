export const name="stack-plus-light";
export const id="dl_0602f86d62a9121f3693";
export const url=new URL("../icons/stack-plus-light.svg?v=1953a3ca6eb809d4baf4bd6e00078e97798b8ee8bc0d09abb473aae972ced301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
