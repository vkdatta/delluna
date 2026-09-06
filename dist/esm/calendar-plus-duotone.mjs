export const name="calendar-plus-duotone";
export const id="dl_9bc72c66946747f7adf5";
export const url=new URL("../icons/calendar-plus-duotone.svg?v=9dcffd5888a75e96c35a4db0ac50fdd50b6c036737ec518a8d256e25ec828b34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
