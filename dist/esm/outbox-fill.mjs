export const name="outbox-fill";
export const id="dl_53a77b36d90d4be4a4b2";
export const url=new URL("../icons/outbox-fill.svg?v=232b6d8980dee75bb75c2c4e79e69f6fd56e364a39c5617800c34331aa03ab43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
