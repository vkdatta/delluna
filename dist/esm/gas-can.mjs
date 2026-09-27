export const name="gas-can";
export const id="dl_309d2f5c26cd4d2da0cd";
export const url=new URL("../icons/gas-can.svg?v=9442e349f01f8b1c3e506e80e2f02cae75f4b25a3c1fcd6b4f6599241c9b7e99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
