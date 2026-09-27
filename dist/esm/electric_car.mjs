export const name="electric_car";
export const id="dl_22322438121cf678a8ed";
export const url=new URL("../icons/electric_car.svg?v=ba4abd862f31c87237299fa9f2964912a6891ff88d4563dad897a3ab52dc7bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
