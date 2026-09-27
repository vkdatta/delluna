export const name="coin-vertical-duotone";
export const id="dl_cf9f18f330a34313a22c";
export const url=new URL("../icons/coin-vertical-duotone.svg?v=bcde914e7fd05a071082d7db43773dcccb89c0f9e9e853f0adcc872da0d824a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
