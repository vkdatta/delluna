export const name="windows-logo-light";
export const id="dl_445009d17cb4c24b1e02";
export const url=new URL("../icons/windows-logo-light.svg?v=a0d1993bc8042c60b713785cf9f4e843c620cc1ad0e990e739eb12b760b3e83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
