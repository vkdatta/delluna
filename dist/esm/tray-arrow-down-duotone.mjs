export const name="tray-arrow-down-duotone";
export const id="dl_f89ff5d40f521fa6ef1e";
export const url=new URL("../icons/tray-arrow-down-duotone.svg?v=140c635d9ab674732552a7e19d5ef2456e0843d5b9103a100935e07ab24d58ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
