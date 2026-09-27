export const name="partner_heart-fill";
export const id="dl_15f345c8f4fd46261512";
export const url=new URL("../icons/partner_heart-fill.svg?v=385f00039a14e6df0538474ae09de89ec426c4ac49d745d33444034b8e53c897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
