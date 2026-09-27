export const name="oil_barrel-fill";
export const id="dl_08806ac7fc6f6b542c1e";
export const url=new URL("../icons/oil_barrel-fill.svg?v=98aa2b62d831e58a7b53fb1721ff42cf934f37d74b56f4752a3c4d15267d28a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
