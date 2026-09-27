export const name="folder-simple-dashed-fill";
export const id="dl_807f8d8488a449329246";
export const url=new URL("../icons/folder-simple-dashed-fill.svg?v=d2a38fcca72a0593d4d1c3031c5a887285defae609d0fa016169fb742207664f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
