export const name="caret-left-duotone";
export const id="dl_e74bf2f7f6574e11a6d0";
export const url=new URL("../icons/caret-left-duotone.svg?v=2c9480fe6502733a682f4a7918768e37f9b00132458b089cfdd91b96d0cd5135",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
