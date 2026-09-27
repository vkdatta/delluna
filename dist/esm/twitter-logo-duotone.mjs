export const name="twitter-logo-duotone";
export const id="dl_0838b23701afc97a1b9b";
export const url=new URL("../icons/twitter-logo-duotone.svg?v=e8c93faa747d6c762b310f1efb50fea6966c4274d8dc240f7c01c51337aeea74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
