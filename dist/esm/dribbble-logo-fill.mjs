export const name="dribbble-logo-fill";
export const id="dl_c5c2798674744abfb9f4";
export const url=new URL("../icons/dribbble-logo-fill.svg?v=a57ea1e99f9114a249e33cdb240a4abf1436df5d179c18c856646616fb2d51a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
