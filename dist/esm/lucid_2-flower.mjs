export const name="lucid_2-flower";
export const id="dl_d4a8461950ae46fc8235";
export const url=new URL("../icons/lucid_2-flower.svg?v=e0258211d76f888f1c71f26d7e11309be2b183513c66fb7eb0b1fdafa380917d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
