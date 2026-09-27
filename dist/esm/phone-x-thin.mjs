export const name="phone-x-thin";
export const id="dl_45e6a3e033ad4c14b3a2";
export const url=new URL("../icons/phone-x-thin.svg?v=f9226aa120aed9e0825690a57d5a5b382bcc7e77fc2bb44eaa767482f9d19517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
