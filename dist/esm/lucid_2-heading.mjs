export const name="lucid_2-heading";
export const id="dl_3a3f86cfea034fe1a4d1";
export const url=new URL("../icons/lucid_2-heading.svg?v=6539f9775ce7372221d18da604873604111890c5adf9168bc64f5cb0564dab18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
