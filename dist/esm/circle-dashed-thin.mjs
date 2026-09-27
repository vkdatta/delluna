export const name="circle-dashed-thin";
export const id="dl_751f395f63e1419cb149";
export const url=new URL("../icons/circle-dashed-thin.svg?v=639e66b96fcdbe415862f51fa3867d4b138722cbc8dbd90b68fda9cb038da37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
