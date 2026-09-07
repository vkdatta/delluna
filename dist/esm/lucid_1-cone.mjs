export const name="lucid_1-cone";
export const id="dl_ad878ba6bd9a4b04959a";
export const url=new URL("../icons/lucid_1-cone.svg?v=83467ae41a41b794cbe73e7a04a1bad107b626f38e2427bae53fe82123f23850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
