export const name="lock_clock";
export const id="dl_7aa8ce843883c480f243";
export const url=new URL("../icons/lock_clock.svg?v=c5be8e5a14e4624aeb4f1cf973cfab655f6ee75097a50e2f92cb0497a3333822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
