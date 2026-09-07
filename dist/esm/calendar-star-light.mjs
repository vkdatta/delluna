export const name="calendar-star-light";
export const id="dl_77f72ef13d80498d81cb";
export const url=new URL("../icons/calendar-star-light.svg?v=edcee048d50ba27e9ad7c35e049120c9f72b167fb399e92f21054cdb95be7841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
