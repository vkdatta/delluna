export const name="dev-to-logo-duotone";
export const id="dl_0323ab13b7044abeb21b";
export const url=new URL("../icons/dev-to-logo-duotone.svg?v=e60c7b5eac9753eb2cf03d8666229754243d96830177ab692ba39691a5316d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
