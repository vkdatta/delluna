export const name="share-fill";
export const id="dl_2a810f9bc6ee4daaa0aa";
export const url=new URL("../icons/S/share-fill.svg?v=078c1b35a52507f3a87e64d0735c2e2a5e59277101cbf6e12726225f44f59270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
