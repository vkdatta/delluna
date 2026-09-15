export const name="counter_9";
export const id="dl_b1c5cf933a744598b2b6";
export const url=new URL("../icons/C/counter_9.svg?v=0ce6c7c723b98a2118bbf7af96ceaa36e76d9c746945a89e382835ab1e2346ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
