export const name="rule_folder";
export const id="dl_5d4e8d6d006742d2bbe4";
export const url=new URL("../icons/rule_folder.svg?v=379c6bc8337b62baf07f39536fd6de1ee59f6c70e2a4725d12e8c6b91ea68ee9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
