export const name="folder-simple-plus";
export const id="dl_de4c80fecb2b434fa34a";
export const url=new URL("../icons/folder-simple-plus.svg?v=9a5add1e29ce8ae562ac5efe3198ff1636193fc19cd54e54b9ee917b52dcdb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
