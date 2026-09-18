export const name="no_encryption";
export const id="dl_a6f953c811194ad596a1";
export const url=new URL("../icons/no_encryption.svg?v=b19c28f1f69dd232b980a14640280e66fa0e2b5f8f03c39eff89d59a57f962e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
