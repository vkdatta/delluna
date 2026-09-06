export const name="jeep-duotone";
export const id="dl_f1e0a1d317b8402f9693";
export const url=new URL("../icons/jeep-duotone.svg?v=4eb6bf3760178c9c802edbde27fca626e444188ea2ac9c9c6176d65f2a971982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
