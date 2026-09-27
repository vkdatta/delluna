export const name="currency-dollar-fill";
export const id="dl_1375f2dc26044b448108";
export const url=new URL("../icons/currency-dollar-fill.svg?v=af5f1d86b6a382c9b7fb7aab8fb566d59184b905a0122394907b01fbe098c8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
