export const name="mobile_hand_off-fill";
export const id="dl_39dd85086c228bd82e0f";
export const url=new URL("../icons/mobile_hand_off-fill.svg?v=2eb713072cfa81ebd0cc571fe5035e4bdd6997655291061d5667ba5c3352bd80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
