export const name="lab_profile";
export const id="dl_d00e7d4a59286ddbf7b0";
export const url=new URL("../icons/lab_profile.svg?v=e76051ae917d9d4968411670ecb0867f8386de0cf163ce0aab6e6d2e917610d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
