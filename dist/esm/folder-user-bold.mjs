export const name="folder-user-bold";
export const id="dl_57b3c2551c6449caa02c";
export const url=new URL("../icons/folder-user-bold.svg?v=02e406a51153e946ef66ce053b0f303a9d096444cfd4e50117f1e8cd56d94c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
