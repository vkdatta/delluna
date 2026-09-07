export const name="star-cross";
export const id="dl_4cbcf4d947eb47e5b806";
export const url=new URL("../icons/close/star-cross.svg?v=6294627b08c66b5faf2dd9d8beb390d2ac100102f52f4f28c0800d5e1fdb796c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
