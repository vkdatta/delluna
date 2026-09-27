export const name="folder-simple-plus-light";
export const id="dl_2df631921af7470f9356";
export const url=new URL("../icons/folder-simple-plus-light.svg?v=a20a8c1f1449e43e6a62845292984bc86198516ca355811cf9bda58a7c33934d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
