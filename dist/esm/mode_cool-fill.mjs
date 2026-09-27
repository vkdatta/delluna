export const name="mode_cool-fill";
export const id="dl_029e490b3baf26fe3fed";
export const url=new URL("../icons/mode_cool-fill.svg?v=44788c01472a429e9e941dda42ad46806f0927d0ff5d18163f99f9a16a3ac3cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
