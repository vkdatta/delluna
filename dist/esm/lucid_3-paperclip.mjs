export const name="lucid_3-paperclip";
export const id="dl_72f77282433148ccbaca";
export const url=new URL("../icons/lucid_3-paperclip.svg?v=a7692d662c6df5adb290fa947c579b4921749f9173eca46895fa4c0e5de3805c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
