export const name="domain_verification";
export const id="dl_94cbb75bbe2345398b21";
export const url=new URL("../icons/domain_verification.svg?v=a63eaf9af2669dd6ce0732450678014c771a414189f9b61f6d427d077975a2b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
