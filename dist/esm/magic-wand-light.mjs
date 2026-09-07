export const name="magic-wand-light";
export const id="dl_3f40f4d2e26e481ba198";
export const url=new URL("../icons/magic-wand-light.svg?v=1bc7ed0f483b1ed26b29720755c77d21713f22ff7feb027c9b396ea7a2941055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
