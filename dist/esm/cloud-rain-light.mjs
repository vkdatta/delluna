export const name="cloud-rain-light";
export const id="dl_ab41b13f95314abe90cf";
export const url=new URL("../icons/cloud-rain-light.svg?v=614bb43954053b0623c27597191fe19ad00ee28efdeeabbfcf7a44bd08435d68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
