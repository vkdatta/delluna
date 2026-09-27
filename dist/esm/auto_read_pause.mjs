export const name="auto_read_pause";
export const id="dl_60ec78e2332c88c0541f";
export const url=new URL("../icons/auto_read_pause.svg?v=c075bff6cdc0a9b1ea75a9c5427fa96d39d8895f07282f3d14751e67132af6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
