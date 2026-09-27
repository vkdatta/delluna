export const name="policy";
export const id="dl_ce34a428fc77968bcfca";
export const url=new URL("../icons/policy.svg?v=925d0f248573ddc859b38449e351ee4fc012e583750e783719ea7da3c9dc9bf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
