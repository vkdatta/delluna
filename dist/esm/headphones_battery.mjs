export const name="headphones_battery";
export const id="dl_6626194624774ff9686f";
export const url=new URL("../icons/headphones_battery.svg?v=bd041ff94a45b761d495b107e3f6b4a4277fa3bcbfd4a242f72aba6e768bce2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
