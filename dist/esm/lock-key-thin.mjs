export const name="lock-key-thin";
export const id="dl_d4181734a35642419a55";
export const url=new URL("../icons/lock-key-thin.svg?v=8db5479f336d0d28dbca74974a1e195754ffef7f2763bb85b62099801dd596a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
