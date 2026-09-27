export const name="phone-pause-fill";
export const id="dl_a10f9d2738d64794b818";
export const url=new URL("../icons/phone-pause-fill.svg?v=3ce7e5b69e24e88cb72370fda7dda8e75c8f2256aabc8cdb8cd74953fc507b7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
