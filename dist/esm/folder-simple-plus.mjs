export const name="folder-simple-plus";
export const id="dl_de4c80fecb2b434fa34a";
export const url=new URL("../icons/folder-simple-plus.svg?v=b75850bbac76d6d38e7562adbf6a12a3eeddeecf9d40b0c3bac7f34a4b42e629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
