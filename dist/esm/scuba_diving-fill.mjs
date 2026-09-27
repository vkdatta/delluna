export const name="scuba_diving-fill";
export const id="dl_1bdc9f5219c2f35f29c1";
export const url=new URL("../icons/scuba_diving-fill.svg?v=39fc97a09137deab1a2e736456f5a05dc20a1f7561c8bc5accffb7f38ab096c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
