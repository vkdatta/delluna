export const name="nest_wake_on_press";
export const id="dl_a240a9ac9a9ecb323317";
export const url=new URL("../icons/nest_wake_on_press.svg?v=7fb6f2be9aa4a02c0d94ea07c619f03897643588dda592e27be3fe2568097ca9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
