export const name="how_to_reg";
export const id="dl_afdef6ba7dc63bb3c079";
export const url=new URL("../icons/how_to_reg.svg?v=712e765b17ab686f5d453f49956e016089faf839d8f7823f4f1f6f38e20032e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
