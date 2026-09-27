export const name="arrow-bend-double-up-right-duotone";
export const id="dl_5f3ac37da5f34919ab5d";
export const url=new URL("../icons/arrow-bend-double-up-right-duotone.svg?v=224d95c6915158edc2957d2bb07d5ce0f65f9e842b4264cb45e18b1a3b1a97b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
