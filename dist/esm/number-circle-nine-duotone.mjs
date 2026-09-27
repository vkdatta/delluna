export const name="number-circle-nine-duotone";
export const id="dl_e3f1c8f882274225a24b";
export const url=new URL("../icons/number-circle-nine-duotone.svg?v=6e75b1def0338ebadd0970ce0f7d367074e542c16a84346a74db2dacf2a03824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
