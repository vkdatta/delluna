export const name="pulse-duotone";
export const id="dl_42ce226f415f434ab82c";
export const url=new URL("../icons/pulse-duotone.svg?v=7e0ac212ed126797882c59644d5a7bf202b553b0aae35c16100d14c949289a11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
