export const name="toolbox-duotone";
export const id="dl_bf40630b5cd541278a51";
export const url=new URL("../icons/T/toolbox-duotone.svg?v=c36a8423f14a7fed14005251706f3b350af19bf0140b7b1fac4bcd16b152ad8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
