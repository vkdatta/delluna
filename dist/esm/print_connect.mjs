export const name="print_connect";
export const id="dl_38802d9ae5f3e46b10da";
export const url=new URL("../icons/print_connect.svg?v=58bb006b915e5c8c7839c9f404d09df23e1e14d161f980277a66c480fbb43d99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
