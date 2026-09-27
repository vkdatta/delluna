export const name="head-circuit-duotone";
export const id="dl_6050693f70bb497ba1ea";
export const url=new URL("../icons/head-circuit-duotone.svg?v=7f426099aee81b12e0b4170db3703896323653b2b662f828d5f368a08d1dc367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
