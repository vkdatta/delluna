export const name="forward-fill";
export const id="dl_959387552f9e7d513be6";
export const url=new URL("../icons/forward-fill.svg?v=877254563f0cf335d5a0b0fa1836a3ad0fafcb6a76f9aa865f3d00f257be815b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
