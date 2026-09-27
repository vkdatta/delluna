export const name="turn_slight_left";
export const id="dl_54307cca10fcfd53529e";
export const url=new URL("../icons/turn_slight_left.svg?v=e7859ecab180aee2acb93a0652fb9c48d205194a7d57e38018051cb1265c573c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
