export const name="arrow_range-fill";
export const id="dl_219fcdca693f4f558579";
export const url=new URL("../icons/A/arrow_range-fill.svg?v=1afff0bb4325ca1bb00be052931c37399891ff31b749045e82fc832d0a0050c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
