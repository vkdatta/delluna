export const name="cards-three-fill";
export const id="dl_70a717117f364bcc8d60";
export const url=new URL("../icons/cards-three-fill.svg?v=4f3ca4153e0a4c89d112266fb19920c00939c131dd0ee8822301b40c0d33c2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
