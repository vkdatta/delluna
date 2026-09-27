export const name="smart_card_reader-fill";
export const id="dl_d57f889c2838cad0cdf9";
export const url=new URL("../icons/smart_card_reader-fill.svg?v=23b642e68226629c16e82907969191334999194e6a0ced09f1f9392ba1f49ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
