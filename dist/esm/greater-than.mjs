export const name="greater-than";
export const id="dl_f94dceaecbd446ff92dd";
export const url=new URL("../icons/greater-than.svg?v=81b7450db2c0f1dd42db8a4a2ad00cb7c32a27968e69eaa75590e0bffe1b3e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
