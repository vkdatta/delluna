export const name="avocado";
export const id="dl_5877d1724af547c0a908";
export const url=new URL("../icons/avocado.svg?v=b904d24cd6a1371c5c377fa59713e8d36c7f17f2d18c2ee7b71fde26c42d1c18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
