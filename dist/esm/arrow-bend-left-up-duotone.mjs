export const name="arrow-bend-left-up-duotone";
export const id="dl_9555bf0df26c42288f58";
export const url=new URL("../icons/arrow-bend-left-up-duotone.svg?v=52d2505b57421141ea0d48b361e377d2888b5927478205d9d037b4700e2a84e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
