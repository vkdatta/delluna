export const name="dataset-fill";
export const id="dl_b0fe9819c2b1bfa38d3d";
export const url=new URL("../icons/dataset-fill.svg?v=e1f20d39187b3141ae264a7b6b4c9475b873111a16b3e2a9ef04d405adc97a44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
