export const name="fork_right-fill";
export const id="dl_1a536008648287aebbcc";
export const url=new URL("../icons/fork_right-fill.svg?v=7dee4e58fe5ebd1373cc1302a1742cdacf8f4150f9bc6473108d841db312076a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
