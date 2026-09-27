export const name="tickets";
export const id="dl_e68a7f284eab4b0ca2db";
export const url=new URL("../icons/tickets.svg?v=429c6573c9026b1ac8015fbe4a45244b6dad6a1ff191ea468612059eb510ddde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
