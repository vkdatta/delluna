export const name="print_add";
export const id="dl_2842b63b2da809fb7559";
export const url=new URL("../icons/print_add.svg?v=605936d7e5f552b98890e5d595fa7c2cb20d932ae6abddd68a315ffa839deac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
