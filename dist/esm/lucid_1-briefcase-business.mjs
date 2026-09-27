export const name="lucid_1-briefcase-business";
export const id="dl_a67c8090dd664d3aaf9a";
export const url=new URL("../icons/lucid_1-briefcase-business.svg?v=19ecb15355c86f186d94909a350a7470a5240ebee3209368aa3f7d67db786380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
