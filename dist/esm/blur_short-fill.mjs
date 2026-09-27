export const name="blur_short-fill";
export const id="dl_c329ec53f0d0d034db7d";
export const url=new URL("../icons/blur_short-fill.svg?v=cb13eb1d34e6d48386d11c9fc8056c87cd1a2a927536d2ad1d96fe812ba544ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
