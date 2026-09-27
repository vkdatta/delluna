export const name="4k-fill";
export const id="dl_a52665e7f4b1aa8d4e61";
export const url=new URL("../icons/4k-fill.svg?v=5d9d6dd1ff02ca0f78f9ff79cdadf14ac1ee24e9199da52ade23cbcdd3fd9e30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
