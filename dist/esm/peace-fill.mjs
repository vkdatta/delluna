export const name="peace-fill";
export const id="dl_e5fc9be6bb414b2b8505";
export const url=new URL("../icons/peace-fill.svg?v=47704f94a68e715ba7466b5db168d291cef92b3e2f8325483efc3259600fc061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
