export const name="sunny-fill";
export const id="dl_416fc4f515bc82639c55";
export const url=new URL("../icons/sunny-fill.svg?v=b91672986bbc321002b65986a0ac109fa6354d3b3f1e105d4a2a2e8390f32079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
