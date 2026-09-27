export const name="keyboard_lock-fill";
export const id="dl_dd34b9dcff6d397a6b15";
export const url=new URL("../icons/keyboard_lock-fill.svg?v=d0abe916bc9f532ccec3e35c6f4f33e1e720c6fe01c04d28680b211d88a0d720",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
