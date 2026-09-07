export const name="address-book-light";
export const id="dl_7a9681572a334d3a86b0";
export const url=new URL("../icons/address-book-light.svg?v=220bd43e9bf49b2da6835273b4edcde971f0b7b938960c0e2b0e9e833da3083f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
