export const name="wave-sawtooth-light";
export const id="dl_73652629cffe15e8df16";
export const url=new URL("../icons/wave-sawtooth-light.svg?v=9b7208729ca7e80f86858f4bf99b19b0028a41f197f17f1cc5ec17e7edb6b6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
