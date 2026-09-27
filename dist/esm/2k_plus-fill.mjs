export const name="2k_plus-fill";
export const id="dl_0e04fe97b8c4b10f9bc6";
export const url=new URL("../icons/2k_plus-fill.svg?v=ca501c3646ef0aa13a22900085ce23e0b535ab7d772c00d77c3ab11070a4baa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
