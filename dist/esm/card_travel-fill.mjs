export const name="card_travel-fill";
export const id="dl_af5bbdd948504c715031";
export const url=new URL("../icons/card_travel-fill.svg?v=2d9e7e15fcfeb15055fde5f805ce7e2fdb213195401182fab64c05a035716ee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
