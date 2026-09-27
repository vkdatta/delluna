export const name="volunteer_activism";
export const id="dl_ccc5588d108aba07d748";
export const url=new URL("../icons/volunteer_activism.svg?v=d82f002cf2983592e575c532ecf15e94eceaa2c9dd6ef5ced477f9f450ffc1f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
