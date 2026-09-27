export const name="lucid_1-copy-minus";
export const id="dl_ad5c49a3d499474dbfe9";
export const url=new URL("../icons/lucid_1-copy-minus.svg?v=c00934dd1deafff380ee25a899df0585857d7aadd50b8c264a78081a25083dd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
