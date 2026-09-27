export const name="cross-duotone";
export const id="dl_c3adbfbc9094406a80d4";
export const url=new URL("../icons/cross-duotone.svg?v=c1aafcde3602216ac1b4492c2e0d59d4cbb04e02682c73e340570c990f16c484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
