export const name="devices-fill";
export const id="dl_2b0afa616d0848f4bacc";
export const url=new URL("../icons/devices-fill.svg?v=26b476e6a14eb9578b89abf7022352ce99537aeac0aacf8b656603e8f2ec98f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
