export const name="folder-simple-user-duotone";
export const id="dl_6155350b17f249599cd1";
export const url=new URL("../icons/folder-simple-user-duotone.svg?v=e76a50bffd34c049018975bdc10d9b5fdb00d82dc98c3252ff5d96c196c0bf81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
