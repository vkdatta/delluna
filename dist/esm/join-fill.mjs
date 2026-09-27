export const name="join-fill";
export const id="dl_3ceaf495d92e52e85e52";
export const url=new URL("../icons/join-fill.svg?v=2a34a419dcafdaf09b68c18e4a30f7514e30c182e70d04428bc9d8cf120fc3e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
