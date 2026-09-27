export const name="mobile_menu";
export const id="dl_0ef9d04b1546fce2cd46";
export const url=new URL("../icons/mobile_menu.svg?v=49d6c1803d93f840a7b254656067241c492db9aa2b2027fe08b9bd0bfc400bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
