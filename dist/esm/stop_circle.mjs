export const name="stop_circle";
export const id="dl_0ee8322c6660a8cc9e57";
export const url=new URL("../icons/stop_circle.svg?v=0f67cb80ba8ad3e8bdbe446f9a35c71aa57cc5622eaae291d71034109ca10022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
