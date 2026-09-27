export const name="apparel";
export const id="dl_ce18a44b1f22c3539e5a";
export const url=new URL("../icons/apparel.svg?v=8bc917c5610484a1182f2ee18605230853eb562f404798153bc459cd68cbc828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
