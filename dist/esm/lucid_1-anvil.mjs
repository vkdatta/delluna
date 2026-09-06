export const name="lucid_1-anvil";
export const id="dl_659a6fbcf8894cd8a7c8";
export const url=new URL("../icons/lucid_1-anvil.svg?v=b2ca5d8ee890f27d0679ae94b797a3418f53c7264dbd90e80f44bd3478206728",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
