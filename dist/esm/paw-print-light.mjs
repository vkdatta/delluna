export const name="paw-print-light";
export const id="dl_302e7d7a76ca404f83f6";
export const url=new URL("../icons/paw-print-light.svg?v=2b275d4615364fa0c2ff59aaed9acfa685c41e21996501f78d0a9bfbed6942d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
