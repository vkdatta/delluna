export const name="folder-minus-bold";
export const id="dl_73a8cdd03f704cabb628";
export const url=new URL("../icons/folder-minus-bold.svg?v=0f4b330ef95ff218bb14593f6ab9771668bdd2551422d25e109b1a5e69ad1d3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
