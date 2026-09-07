export const name="vault-light";
export const id="dl_2863151eb36444848f01";
export const url=new URL("../icons/V/vault-light.svg?v=35260edc35eea9d978d8f2033273150fccebbd244a10b187876203d2e00d45ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
