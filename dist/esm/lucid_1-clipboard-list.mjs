export const name="lucid_1-clipboard-list";
export const id="dl_3483ea703e9e4a569830";
export const url=new URL("../icons/lucid_1-clipboard-list.svg?v=6e12a2bc5d8e79c2a1134e6ced320efbc3ff6da55829645ce691e58e9a5ec797",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
