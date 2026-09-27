export const name="skip-back-bold";
export const id="dl_06de68dd455fef7aefa7";
export const url=new URL("../icons/skip-back-bold.svg?v=0b8fa020db94e05754449c933e38897f49146a2d463915ea5b1323ba0b624dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
