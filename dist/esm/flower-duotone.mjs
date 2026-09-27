export const name="flower-duotone";
export const id="dl_43079dfa63e34195bb38";
export const url=new URL("../icons/flower-duotone.svg?v=7c15d95397119e557b712b4c5d28fe34a4cf50e0999ab8d3448b8d61f90c68ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
