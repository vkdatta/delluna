export const name="x-logo-fill";
export const id="dl_665c88276424438c90d9";
export const url=new URL("../icons/X/x-logo-fill.svg?v=b760dcebe932bafc69784799231eb8ce988dc33fa5d68d20e706508b24264526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
