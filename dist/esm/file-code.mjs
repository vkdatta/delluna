export const name="file-code";
export const id="dl_549a5e6418b94419b742";
export const url=new URL("../icons/file-code.svg?v=3e9d509cba1f1c8560a5102d800ec99d3a4f0e4c738344c17cf2f86b343f506e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
