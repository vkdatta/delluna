export const name="reminder-fill";
export const id="dl_d85a55ae13714252afaa";
export const url=new URL("../icons/reminder-fill.svg?v=1de9ca2a6f7b2570129fa07d9a5be047c13f4d6d927da6b279b083c33b79cebd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
