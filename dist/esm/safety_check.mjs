export const name="safety_check";
export const id="dl_d6df1b7023fce2f3c4cb";
export const url=new URL("../icons/safety_check.svg?v=31a0a23379169739e2098741f0b9a7f0cb4e5786fbf24569476e408bcd6c763d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
