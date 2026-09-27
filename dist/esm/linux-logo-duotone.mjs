export const name="linux-logo-duotone";
export const id="dl_b5756f421751408e8b50";
export const url=new URL("../icons/linux-logo-duotone.svg?v=1cf8dd61ae1bd825ff169b43e346c8258ce42d6bf0735c4c371f022ccac36f41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
