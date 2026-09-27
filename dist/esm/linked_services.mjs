export const name="linked_services";
export const id="dl_2c07dc5fee1b3257ea87";
export const url=new URL("../icons/linked_services.svg?v=b53cc565439773de51bf8e0d671a5250ebb8520b11210cfccaa577411c6f756a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
