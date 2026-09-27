export const name="skip-forward-fill";
export const id="dl_d741386e957cfd2554b1";
export const url=new URL("../icons/skip-forward-fill.svg?v=656f0d66a78d048a3f9cd3f0b0ccf2039d301fc2b5f69b40de16b83cad2f3ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
