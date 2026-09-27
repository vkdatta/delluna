export const name="fingerprint-duotone";
export const id="dl_b5473ba39dfc48ec976e";
export const url=new URL("../icons/fingerprint-duotone.svg?v=ec3ad15c2c59ffb12c897a8754b32680b255828632f50dd694aaca9f63490bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
