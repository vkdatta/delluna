export const name="campaign-fill";
export const id="dl_27b64cc63842121bad01";
export const url=new URL("../icons/campaign-fill.svg?v=819d98076726d5cb9d4e3891ee3c90e5f66af54ed0f0f4479516fe2a32373323",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
