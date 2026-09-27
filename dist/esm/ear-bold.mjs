export const name="ear-bold";
export const id="dl_2e56dd4ccceb409f86ec";
export const url=new URL("../icons/ear-bold.svg?v=d8d55cee7e619ee531a27b195153216814bd30916386b9b74a08550b6e3088b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
