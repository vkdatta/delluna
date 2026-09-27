export const name="fingerprint-duotone";
export const id="dl_b5473ba39dfc48ec976e";
export const url=new URL("../icons/fingerprint-duotone.svg?v=a69bda898ba1475ad84a215ba88fff97c60856533ccb895a2fe88ee7dc7d55a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
