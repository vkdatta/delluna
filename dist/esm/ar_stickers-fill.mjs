export const name="ar_stickers-fill";
export const id="dl_2e4047d77b6c07ac8567";
export const url=new URL("../icons/ar_stickers-fill.svg?v=4c2c9c404fc17c52e68d8e6a57581bff70c4d849a51fab5b7f0d4f401e710b23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
