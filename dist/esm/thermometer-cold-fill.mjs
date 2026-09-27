export const name="thermometer-cold-fill";
export const id="dl_8906f231401d2d6e0688";
export const url=new URL("../icons/thermometer-cold-fill.svg?v=ae2aca9ae37b8df04fd7d10dc60e5a5bef0941bc1784a5a6a615bc310399e40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
