export const name="background_dot_small-fill";
export const id="dl_21a683ecb310dbedc1fc";
export const url=new URL("../icons/background_dot_small-fill.svg?v=5a401e6f2d9b115842b53af5ad0c72d7fb5d8d1a8243d7b4c48cf2c1a6adceb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
