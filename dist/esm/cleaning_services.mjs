export const name="cleaning_services";
export const id="dl_6c21f9929c274c8a4ceb";
export const url=new URL("../icons/cleaning_services.svg?v=c856f63e8ae13897a07320c1b9316178611445c59ad2ceda0edfb8602d623372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
