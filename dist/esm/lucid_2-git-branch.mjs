export const name="lucid_2-git-branch";
export const id="dl_1305e4ae88e540ba887b";
export const url=new URL("../icons/lucid_2-git-branch.svg?v=9a7625b7c8db244be577d14c899f0dd98a25779ec97b6333d81a612c63e68448",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
