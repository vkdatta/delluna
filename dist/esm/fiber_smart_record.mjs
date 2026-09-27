export const name="fiber_smart_record";
export const id="dl_e09daeac22fadb0681d8";
export const url=new URL("../icons/fiber_smart_record.svg?v=a3e36da26fce5c4d0fced0b554303c275aeef6ee3cdb5d91cdcdc6bb0d127603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
