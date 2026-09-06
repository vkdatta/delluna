export const name="hash-duotone";
export const id="dl_40be942ffd3d4fd48c0a";
export const url=new URL("../icons/hash-duotone.svg?v=8688e9bd4a5496625679e53a3a8f61c232d2c87a28e4ff10a7ec9d3a1854d495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
