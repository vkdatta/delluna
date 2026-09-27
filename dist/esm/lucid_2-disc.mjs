export const name="lucid_2-disc";
export const id="dl_ade8eada76aa44498331";
export const url=new URL("../icons/lucid_2-disc.svg?v=b415f94973d3cf6069982984d51b32a4ccc3e24d03363bf12239fa93665d01c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
