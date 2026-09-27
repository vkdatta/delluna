export const name="dropbox-logo-bold";
export const id="dl_f3b268d6562c4ea18b5d";
export const url=new URL("../icons/dropbox-logo-bold.svg?v=7775d7c03e7fed41de7764d88804a637402db16c09daff24c3af778737653ad4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
