export const name="lucid_1-accessibility";
export const id="dl_4994fafa4c3348ad9b19";
export const url=new URL("../icons/lucid_1-accessibility.svg?v=5714ced1a7ef4a9a6388c387d3a22772bae4b0a5a18421afa5025455e86d6c2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
