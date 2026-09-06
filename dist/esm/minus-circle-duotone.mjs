export const name="minus-circle-duotone";
export const id="dl_43fe570feb214dacb0ad";
export const url=new URL("../icons/minus-circle-duotone.svg?v=375c783e84755ac25952a9c4120ab44620b4c1bfe19f4639094c69caa31cbf6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
