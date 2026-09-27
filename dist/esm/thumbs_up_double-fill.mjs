export const name="thumbs_up_double-fill";
export const id="dl_42762142dbc27e6507d1";
export const url=new URL("../icons/thumbs_up_double-fill.svg?v=33d3b9ecb540117367e4c2c7158e6894a92788dc559c1f33bea65b2da387ab9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
