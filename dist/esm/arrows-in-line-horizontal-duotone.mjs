export const name="arrows-in-line-horizontal-duotone";
export const id="dl_cd0137d943744233be8e";
export const url=new URL("../icons/arrows-in-line-horizontal-duotone.svg?v=f8aa1b0a7bf8f3f1103a67f2ff52c88a072d12dfe5fc36f262e90e830ccb1e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
