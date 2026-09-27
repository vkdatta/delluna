export const name="pin_road_2-fill";
export const id="dl_17ecc43fd65e13b15d47";
export const url=new URL("../icons/pin_road_2-fill.svg?v=45b18f486fd3692371463f006a1aa7ff6fe6f777c4324deda4fe5db91e2b5efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
