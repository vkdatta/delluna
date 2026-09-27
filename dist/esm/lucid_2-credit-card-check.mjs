export const name="lucid_2-credit-card-check";
export const id="dl_6062cadcc9f04d34bf45";
export const url=new URL("../icons/lucid_2-credit-card-check.svg?v=29b0fd95312a5b7ed64270d26729e5453310b16f1a03cd6c832f890597277bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
