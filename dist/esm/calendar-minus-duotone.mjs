export const name="calendar-minus-duotone";
export const id="dl_55d596d3b8d046d1a21a";
export const url=new URL("../icons/calendar-minus-duotone.svg?v=be5aa91e2e06c233c54cf150c66ef2c53b40df8ebb409d403f922a121c6b0df0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
