export const name="folder-simple-plus";
export const id="dl_de4c80fecb2b434fa34a";
export const url=new URL("../icons/folder-simple-plus.svg?v=83e45033ebe1e9218ad3b16cbe12c287f17c1ec0c743a8c616e066f14a1c282b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
