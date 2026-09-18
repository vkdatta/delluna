export const name="health_and_safety";
export const id="dl_1cf307229e754f4ba320";
export const url=new URL("../icons/H/health_and_safety.svg?v=be8f5fb0548346504ef2450741fcfa9e20f63f1f2646250c5ce0e99234af0d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
