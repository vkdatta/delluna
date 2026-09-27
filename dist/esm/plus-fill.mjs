export const name="plus-fill";
export const id="dl_606a8e8dd5ee47d9948e";
export const url=new URL("../icons/plus-fill.svg?v=fec6724aaa5071fe50107877aac542aa701f195f6b28456296d963188dd04e38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
