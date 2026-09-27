export const name="minus-circle-light";
export const id="dl_b89b11d8629b4a359ee9";
export const url=new URL("../icons/minus-circle-light.svg?v=d98ea4b664c30441f211697a7155932e562bd5e475b75093576a5c91ffbe0272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
