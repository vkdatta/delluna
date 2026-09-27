export const name="lucid_3-phone-off";
export const id="dl_42fd5a2d038d4f8cb92e";
export const url=new URL("../icons/lucid_3-phone-off.svg?v=693bca4d2c45116d925001e48812fe9cc0c7e001362b97528a0a2bea5dea7ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
