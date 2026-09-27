export const name="cash-register";
export const id="dl_ce7506fe0cca4ed8b6dd";
export const url=new URL("../icons/cash-register.svg?v=7b78a9310ab8b7e0441e8fa512ebd066a75d189020bafa3bbd5c4cd75613a121",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
