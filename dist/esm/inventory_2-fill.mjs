export const name="inventory_2-fill";
export const id="dl_911445dbd265d1a9bc07";
export const url=new URL("../icons/inventory_2-fill.svg?v=3a86febe817b74283414777286ef4e4dff81ee2b5ab72c1e7e88fec245d57ad8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
