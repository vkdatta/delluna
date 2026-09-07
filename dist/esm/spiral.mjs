export const name="spiral";
export const id="dl_32063e8c4863499c926b";
export const url=new URL("../icons/S/spiral.svg?v=85e6545227ba0e3a3a9beb02a64e72bea916eb5c45c274d00b5d1112ce83e919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
