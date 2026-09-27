export const name="lucid_3-package-2";
export const id="dl_85c4136aa40f4b6b8211";
export const url=new URL("../icons/lucid_3-package-2.svg?v=f0ef71d8a3695259a0e46935c59a0870aba091cf83ac29f5cd59cf08b5e05753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
