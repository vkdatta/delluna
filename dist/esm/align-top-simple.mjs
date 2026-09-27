export const name="align-top-simple";
export const id="dl_cb7fcad52f20438ca78a";
export const url=new URL("../icons/align-top-simple.svg?v=1538598530134d580360662db7653472061126880d135e625b1fada8f20c36be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
