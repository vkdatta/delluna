export const name="inventory_2";
export const id="dl_85fa816670fb8e945dc0";
export const url=new URL("../icons/inventory_2.svg?v=a08cab34ab6c59469772387a1e17c8d4e3d2e83598f367fccca72bc2ca6bb26b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
