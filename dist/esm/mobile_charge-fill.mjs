export const name="mobile_charge-fill";
export const id="dl_88359b0d2c874aab9704";
export const url=new URL("../icons/M/mobile_charge-fill.svg?v=5e70bcb4bcdf0c2668ffa273a9a7a517cc3dc54889ccc538d8647236c598efb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
