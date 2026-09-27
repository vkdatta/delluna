export const name="minus-circle-duotone";
export const id="dl_43fe570feb214dacb0ad";
export const url=new URL("../icons/minus-circle-duotone.svg?v=81a7c22ef2ee4017057b3fa2fe3f4af08660c8aca6443290564b7592790c91cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
