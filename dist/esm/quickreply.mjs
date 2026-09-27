export const name="quickreply";
export const id="dl_3b2ed16798d6609aae9e";
export const url=new URL("../icons/quickreply.svg?v=584119faea4955ee8e754c0564ff27a401e74113b78c42372200236c2a39a328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
