export const name="lucid_3-mosque";
export const id="dl_1462941e6c1641e79ee2";
export const url=new URL("../icons/lucid_3-mosque.svg?v=ab1779afcd0aec36288e7f5e659ce4a62533d1e12205d4f638bcee420aadd224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
