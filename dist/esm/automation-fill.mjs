export const name="automation-fill";
export const id="dl_265a039ef2894242bcfb";
export const url=new URL("../icons/automation-fill.svg?v=7fa68972f784a9cc47179d1b537f3de198c24c8475e921cc6cd60a5319aa08c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
