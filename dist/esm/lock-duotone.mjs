export const name="lock-duotone";
export const id="dl_3b03d22f5a1e4b209e8b";
export const url=new URL("../icons/lock-duotone.svg?v=08412a11cc0ebb4d842904f2930ebdf66d12439e95bfe6c5a7174505c0280149",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
