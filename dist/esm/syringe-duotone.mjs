export const name="syringe-duotone";
export const id="dl_81862ad1ead145009dcc";
export const url=new URL("../icons/S/syringe-duotone.svg?v=932ae1adfeee87a73dcec5d6908b158c2d23c9d277533a7b29d29bdfac38cfb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
