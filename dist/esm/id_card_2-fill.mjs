export const name="id_card_2-fill";
export const id="dl_b28d55f678a5720687e8";
export const url=new URL("../icons/id_card_2-fill.svg?v=801f8df3f3736608dc3bef7532e3189f576987100090d09ccb8c095d72ecf3f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
