export const name="selection-slash";
export const id="dl_0454d87e8ef5428505d1";
export const url=new URL("../icons/selection-slash.svg?v=70a4cdcfa285311de184b7c8c6faabfa89b48b1a0c16e2dc9c7f590630b09d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
