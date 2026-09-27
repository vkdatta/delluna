export const name="television-duotone";
export const id="dl_5c7d8a4ccf153936332a";
export const url=new URL("../icons/television-duotone.svg?v=4445e4e679df255300514218763936bee46c9a9b304ec89c805e5a130d63c4b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
