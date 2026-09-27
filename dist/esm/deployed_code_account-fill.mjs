export const name="deployed_code_account-fill";
export const id="dl_e431d07013a19917dfb5";
export const url=new URL("../icons/deployed_code_account-fill.svg?v=e971f4735d9dfcfce1b5795b631853bb875175852b8deb7d3083df3f59da2813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
