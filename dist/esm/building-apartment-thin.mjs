export const name="building-apartment-thin";
export const id="dl_dc5b9ff61d194b8db335";
export const url=new URL("../icons/building-apartment-thin.svg?v=7d235a55c38eaf0fca20ddaf60eb7c88c41e93da58ef7872c8e21b746b826667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
