export const name="seatbelt-fill";
export const id="dl_65fe02a450eeac1e1208";
export const url=new URL("../icons/seatbelt-fill.svg?v=228821eded40713506f1736f939a0939947129482061ee170138f4a140b2aa02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
