export const name="lucid_2-galaxy";
export const id="dl_af5a969136fd414d9929";
export const url=new URL("../icons/lucid_2-galaxy.svg?v=13ae5ec91f2937c17a6a91e9164ae7bce7dc7dac6d504f6d64ea9e5cc824960d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
