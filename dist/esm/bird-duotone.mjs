export const name="bird-duotone";
export const id="dl_eda15abf3ace4f849dc1";
export const url=new URL("../icons/bird-duotone.svg?v=60bfc2e30af59e76cb8b27ed078fbc4d67b615664207140a50bbb6346ce5d9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
