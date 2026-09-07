export const name="magnifying-glass-minus";
export const id="dl_f8b58a0cec1543b48503";
export const url=new URL("../icons/magnifying-glass-minus.svg?v=a8478832f12a7a5a231e1ffb1b987fe45f9e1508570b98046e7ff51db7eb1043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
