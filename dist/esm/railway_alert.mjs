export const name="railway_alert";
export const id="dl_b82473c845910e109c5f";
export const url=new URL("../icons/railway_alert.svg?v=b5dd441dc3c368bfeb09d3dc5ecdfd1c8219fa59eba91c3b306d858162b43da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
