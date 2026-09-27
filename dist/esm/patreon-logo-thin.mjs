export const name="patreon-logo-thin";
export const id="dl_7b2c4219558543e2a358";
export const url=new URL("../icons/patreon-logo-thin.svg?v=638f94263e9d1c800fc470ef09a2f290bf764ffb319e8cd1619cb3e9359bcde3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
