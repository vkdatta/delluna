export const name="lucid_3-paperclip";
export const id="dl_72f77282433148ccbaca";
export const url=new URL("../icons/lucid_3-paperclip.svg?v=088322f236138b707fd542f90e80ee15c48f7930fb29826734427f518778a44b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
