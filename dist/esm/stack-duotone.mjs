export const name="stack-duotone";
export const id="dl_594c3b6f164b419ab593";
export const url=new URL("../icons/S/stack-duotone.svg?v=f1449eb8dcde911c59b913042bbf51ee9778aae9eb9663b7b14a8d9fe1032aad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
