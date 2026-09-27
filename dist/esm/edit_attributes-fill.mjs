export const name="edit_attributes-fill";
export const id="dl_9ba81d3e7fc4554ce32b";
export const url=new URL("../icons/edit_attributes-fill.svg?v=c5f86bf2dc1c1bc095dff77a1e10c5e7572e81cc8a77ff9faddf0fcad791c1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
