export const name="gender-nonbinary-bold";
export const id="dl_c7d892f375dc4a1fa70a";
export const url=new URL("../icons/gender-nonbinary-bold.svg?v=2b8a9bc3cb6db2a3790d6e188ff4fd7d6b7b7285783f7c03570c7544d1a29603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
