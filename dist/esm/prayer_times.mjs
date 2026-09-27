export const name="prayer_times";
export const id="dl_b2ffdce707e11fec7faf";
export const url=new URL("../icons/prayer_times.svg?v=b4fe81d0a57eff21ce697ab1a831b3db6bc3ba82f6338b5938788fa2ed97aa1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
