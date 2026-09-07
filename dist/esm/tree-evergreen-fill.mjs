export const name="tree-evergreen-fill";
export const id="dl_43d9968c62874782abe8";
export const url=new URL("../icons/T/tree-evergreen-fill.svg?v=7b266525b4a903718b1f3f016b89f6f38bde3c65eb4e26690be2f81862564514",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
