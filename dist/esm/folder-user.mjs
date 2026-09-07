export const name="folder-user";
export const id="dl_c50614cb386f4174917c";
export const url=new URL("../icons/folder-user.svg?v=75bed7294e9d55a834b7c53fa3fde2a3cbd2a9998685c3f7bd1de8d9baf8fc64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
