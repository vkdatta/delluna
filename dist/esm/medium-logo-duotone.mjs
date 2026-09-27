export const name="medium-logo-duotone";
export const id="dl_cec95fd0621f48fbb18d";
export const url=new URL("../icons/medium-logo-duotone.svg?v=a36295a7b10dfb0e721aa0231a9c1ac4d6334a107aef973ce19a238e5a12b298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
