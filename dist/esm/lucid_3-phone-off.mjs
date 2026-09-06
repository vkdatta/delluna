export const name="lucid_3-phone-off";
export const id="dl_42fd5a2d038d4f8cb92e";
export const url=new URL("../icons/lucid_3-phone-off.svg?v=c6d59e953a3ec76556be86adafcd195bc07296f9d940a8989e9160ab766bcbdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
