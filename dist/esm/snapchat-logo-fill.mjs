export const name="snapchat-logo-fill";
export const id="dl_9420f027a6dd4d128f99";
export const url=new URL("../icons/snapchat-logo-fill.svg?v=b1f3744309fe31b069bafb7dc457761cc2884e3aff59afb9b402d546ae0509ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
