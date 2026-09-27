export const name="lucid_3-paint-roller";
export const id="dl_f9360ec842b1487c8d4b";
export const url=new URL("../icons/lucid_3-paint-roller.svg?v=db86f895acd428787ce2a4d588b2fdcec453abf6465d79aba538f8aa5ad9183d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
