export const name="hvac_max_defrost-fill";
export const id="dl_490ad4532059caa301a2";
export const url=new URL("../icons/hvac_max_defrost-fill.svg?v=1109b87f8f72cb18a4c2a9952c6cb4c7fef1c14d5661d878f5abbb329a5b95c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
