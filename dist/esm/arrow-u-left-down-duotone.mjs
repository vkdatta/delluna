export const name="arrow-u-left-down-duotone";
export const id="dl_823a0f3ac8e34e78bdcd";
export const url=new URL("../icons/arrow-u-left-down-duotone.svg?v=cefeeb3856d8beef448726a6a3943b750729c4b43b0e5726989cf57e07aa7479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
