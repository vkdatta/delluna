export const name="lucid_2-git-branch";
export const id="dl_1305e4ae88e540ba887b";
export const url=new URL("../icons/lucid_2-git-branch.svg?v=c7d966511494a2324ed4fea3479e01d5c698c6a0f9d0458f9f1b9f18f68a39ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
