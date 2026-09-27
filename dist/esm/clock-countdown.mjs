export const name="clock-countdown";
export const id="dl_a7d9cfa6f07b43db96f6";
export const url=new URL("../icons/clock-countdown.svg?v=4f603b0c6684cbbc9f4c0022482e529ff3b678ae8a17a64f407043c6ceddded2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
