export const name="lucid_3-sigma";
export const id="dl_95ca081f2ecb4013a830";
export const url=new URL("../icons/lucid_3-sigma.svg?v=7151b0d65b2576ff6ba2ecc4221892059d15c628777f6cde178a8d479100b95e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
