export const name="carrot-duotone";
export const id="dl_454a9675b89d4fdf8c4b";
export const url=new URL("../icons/carrot-duotone.svg?v=f3dd31f87fb9c50edd3a57023640ba1ad9ed1e1f34763d518f789f52199ca64e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
