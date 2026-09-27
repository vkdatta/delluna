export const name="fediverse-logo-duotone";
export const id="dl_02b342dd56004bb3b7f8";
export const url=new URL("../icons/fediverse-logo-duotone.svg?v=036c080c8b0045a0a8d7f6a6e9ac7db9ab38bba209119eeabbd8639abd364c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
