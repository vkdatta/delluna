export const name="windows-logo-duotone";
export const id="dl_c47082486d6743398ab9";
export const url=new URL("../icons/W/windows-logo-duotone.svg?v=efd0ccb6c89e378e71ae8790da40c60c616716166f89acc64175d95a8fe7d6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
