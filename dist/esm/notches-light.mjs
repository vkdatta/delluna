export const name="notches-light";
export const id="dl_a84676f474084fc3aed4";
export const url=new URL("../icons/notches-light.svg?v=6bcf2ad52713def758fc8fd9ebf7548020a2fa02f021dd5229fbfb127f23eea9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
