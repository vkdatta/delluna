export const name="stack-simple-bold";
export const id="dl_c2684b5a880bb13c48f8";
export const url=new URL("../icons/stack-simple-bold.svg?v=beb3a332f01f5f80357a07163b6f0d45ba8a40c20af282d5d763b642720c0d64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
