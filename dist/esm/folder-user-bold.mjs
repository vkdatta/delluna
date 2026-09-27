export const name="folder-user-bold";
export const id="dl_57b3c2551c6449caa02c";
export const url=new URL("../icons/folder-user-bold.svg?v=33ec7ecb013a68ee8c602f42b301de2493e1c16e005f839cb97b24081ca8c212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
