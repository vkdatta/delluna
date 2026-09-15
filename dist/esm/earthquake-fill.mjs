export const name="earthquake-fill";
export const id="dl_cbc2a4576d23493dbfca";
export const url=new URL("../icons/E/earthquake-fill.svg?v=e7d72f3580c53e20946d33d34a8b43cd2493242a36d9194af0c371921927b695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
