export const name="folder-simple-user-thin";
export const id="dl_275f8855b8054d959206";
export const url=new URL("../icons/folder-simple-user-thin.svg?v=333dfee477a816cca1c296607a3d4cc785bb451f54ce9aa6263f9c95321af576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
