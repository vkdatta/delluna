export const name="tablet_mac";
export const id="dl_646a8227a961acb9e4da";
export const url=new URL("../icons/tablet_mac.svg?v=a479e41389634a644d575bb8d5fbecb5ffc69fbaa8abf15dc5ec3cb525def208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
