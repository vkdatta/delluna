export const name="gender-female-bold";
export const id="dl_b49db5e6906943d8b339";
export const url=new URL("../icons/gender-female-bold.svg?v=0a260d89194b22734c5c011fe835e3836fddbfaaa1329412d1f8934ed156b733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
