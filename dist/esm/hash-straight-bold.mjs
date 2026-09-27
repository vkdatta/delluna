export const name="hash-straight-bold";
export const id="dl_04d8b6b6e54f4b52a800";
export const url=new URL("../icons/hash-straight-bold.svg?v=c32e9c6e6760af2e12320b63f6ff98e039b2f6a2fd4d454cc9754055b8520c55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
