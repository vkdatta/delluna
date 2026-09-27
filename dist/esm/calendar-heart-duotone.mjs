export const name="calendar-heart-duotone";
export const id="dl_934962d7985545649b63";
export const url=new URL("../icons/calendar-heart-duotone.svg?v=648f638fb66b078ab48832dca25f3a0d6d4b93b15097d6cd177996cc4cf52ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
