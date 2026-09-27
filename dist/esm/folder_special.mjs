export const name="folder_special";
export const id="dl_5faf7a3c47dbd107103f";
export const url=new URL("../icons/folder_special.svg?v=be54b75c7cec1ad3d79d9d78f9e3fea9dfb863a9f4df642b8eb5afbee8c19c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
