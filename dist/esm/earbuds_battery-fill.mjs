export const name="earbuds_battery-fill";
export const id="dl_b9b11c0a7f990ef9bdf4";
export const url=new URL("../icons/earbuds_battery-fill.svg?v=0db3053260eea7163ec0578ea7bb7addb8157bdeedcb8915f9bb7a24ef3580f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
