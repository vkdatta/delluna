export const name="washing-machine";
export const id="dl_ea8ef86a827d4d9c8e99";
export const url=new URL("../icons/W/washing-machine.svg?v=c98966e69122656274fda9a02998952f47d2aa2bf22ff2170183816ac210a8d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
