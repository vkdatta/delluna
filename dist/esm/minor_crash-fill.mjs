export const name="minor_crash-fill";
export const id="dl_b2e08cd906e43fb23f8a";
export const url=new URL("../icons/minor_crash-fill.svg?v=1af678b14130380b57c933a03fc2819c8ace37f37c289db9da628af8f7c79e2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
