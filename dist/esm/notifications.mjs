export const name="notifications";
export const id="dl_f057d3776ff4c1835b33";
export const url=new URL("../icons/notifications.svg?v=11cc262fe184310250728109ed1d51abc33a7bd52ec5c1cc30f25ad1497ff715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
