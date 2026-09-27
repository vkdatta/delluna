export const name="phone-incoming-thin";
export const id="dl_e19444ecc04e4b628e6a";
export const url=new URL("../icons/phone-incoming-thin.svg?v=0f7fc16f3d8e373c9a949871b0d83129a2fcbcb4ebaa1521ff87b3ba87028d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
