export const name="mobile_charge";
export const id="dl_51fa33b0693451a66757";
export const url=new URL("../icons/mobile_charge.svg?v=4c322678231adfe9fb105332df25dd698e21b86356f14a99e43394b79d940843",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
