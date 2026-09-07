export const name="tabs-duotone";
export const id="dl_139e68cb08a24b4fbec0";
export const url=new URL("../icons/T/tabs-duotone.svg?v=d72e6c1da8b038c48b773ff12cca7ad631c481973f9dab2f30a5bdc39afbfc4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
