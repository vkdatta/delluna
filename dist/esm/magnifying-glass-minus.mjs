export const name="magnifying-glass-minus";
export const id="dl_f8b58a0cec1543b48503";
export const url=new URL("../icons/magnifying-glass-minus.svg?v=b34d542019a46d7db2a337070f8734e5f7b319431bc995bf815859cafe6c4357",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
