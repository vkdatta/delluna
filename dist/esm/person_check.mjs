export const name="person_check";
export const id="dl_e82d8a74c963ce5f6fba";
export const url=new URL("../icons/person_check.svg?v=50839722c7aafe1db81b62e146ec84e8e5c1fa75e62c4adc81398c4ce3c1738f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
