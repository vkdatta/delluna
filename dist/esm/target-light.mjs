export const name="target-light";
export const id="dl_6ca978a3e38f4d4582bc";
export const url=new URL("../icons/T/target-light.svg?v=3ddc13a04c308fb2d292efb0ba18bf6408b9ceda871638568f2139bb9944d46e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
