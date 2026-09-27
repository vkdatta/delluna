export const name="lucid_2-key-square";
export const id="dl_d6085ec4c2244979a5f2";
export const url=new URL("../icons/lucid_2-key-square.svg?v=b393d01178c1b1fa8e68bf63facee37041f01bfd73168a22941d9397c8aca9ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
