export const name="globe-hemisphere-east-duotone";
export const id="dl_74aa2208a8fc4d46aa98";
export const url=new URL("../icons/globe-hemisphere-east-duotone.svg?v=8f3e890e09afe8dc0cc77e0f4cffa40cb4328f156a4359f045a2b23be06dda50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
