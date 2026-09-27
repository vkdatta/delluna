export const name="calendar_clock";
export const id="dl_d8ef59665fe2402bd84b";
export const url=new URL("../icons/calendar_clock.svg?v=c2378c5a4f9df1d2c290ffa71961d22b923e2ca66b249efc684c4290724badcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
