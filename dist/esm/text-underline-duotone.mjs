export const name="text-underline-duotone";
export const id="dl_022a6aa41e408526334d";
export const url=new URL("../icons/text-underline-duotone.svg?v=50008b8bed2818928030f9f9475667c9c5fd8e101fa023337182ca4d74e7ce21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
