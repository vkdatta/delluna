export const name="text_fields-fill";
export const id="dl_f7e475813beb0269d687";
export const url=new URL("../icons/text_fields-fill.svg?v=264981fa66faa97038735c25a42563280c02d945863c51cf7537c46559fe3582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
