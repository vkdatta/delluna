export const name="battery_charging_full";
export const id="dl_32d325fbe916edb11ef9";
export const url=new URL("../icons/battery_charging_full.svg?v=ca7db8d67843dea49f55137891b7b036707fb19be1c75a9ec4a9a990f7abcf20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
