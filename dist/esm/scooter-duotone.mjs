export const name="scooter-duotone";
export const id="dl_65bf81dedc57b99baf2f";
export const url=new URL("../icons/scooter-duotone.svg?v=fcaa89d0bdfd9306e4584080ee3576391e314629babec2b4611311d88c1648d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
