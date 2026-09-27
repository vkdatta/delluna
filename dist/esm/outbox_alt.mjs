export const name="outbox_alt";
export const id="dl_74fd470f455cdc9abded";
export const url=new URL("../icons/outbox_alt.svg?v=073a4dc507dc56eb025f182c73c5be6004aac7ac8bf3936f3d3a166b9026e99a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
