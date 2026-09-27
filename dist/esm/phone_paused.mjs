export const name="phone_paused";
export const id="dl_2e2c3dedb2cee624990a";
export const url=new URL("../icons/phone_paused.svg?v=ed75d37799c03d6e704d8c1fb6734f49d9bffbe136f569e3371201db247dbd86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
