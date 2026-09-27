export const name="lucid_1-circle-check-big";
export const id="dl_bf3701dad76147bc9387";
export const url=new URL("../icons/lucid_1-circle-check-big.svg?v=82103df5ad1f89ed2c5ec8cb9d82c525d964196ab7839eb69a023f7e3ed376c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
