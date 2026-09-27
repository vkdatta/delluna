export const name="arrows-out-simple-bold";
export const id="dl_8323701a56af415497a6";
export const url=new URL("../icons/arrows-out-simple-bold.svg?v=7ca887a5e378e1fbf2d15219dafb8da5616670611f7f80daa2a148119c9f41e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
