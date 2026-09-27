export const name="link-simple";
export const id="dl_9f66f74368374f7e8f8a";
export const url=new URL("../icons/link-simple.svg?v=0e6e714cdce25fd96d57eaa3af5edf39bbd89229aaa0323d89ab52bf3e3663bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
