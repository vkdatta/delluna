export const name="trash-simple-light";
export const id="dl_8d06751d78f5aac86180";
export const url=new URL("../icons/trash-simple-light.svg?v=19dfc5a0274a1424bfa2b984a766a6f39d0b149056b29bcc1f7b627c2687075e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
