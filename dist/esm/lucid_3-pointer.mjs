export const name="lucid_3-pointer";
export const id="dl_c132183939674944a435";
export const url=new URL("../icons/lucid_3-pointer.svg?v=c75be0e6da5a45a5bd231d77a429eb314127da31b90a440df8d992088a798f2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
