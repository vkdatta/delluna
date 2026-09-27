export const name="broadcast_on_home-fill";
export const id="dl_6d71b6e2093036d4f818";
export const url=new URL("../icons/broadcast_on_home-fill.svg?v=81bfa451a64210b6c428091b6dbd91ef99fc45eb4afdf288dd1574ab96cbc0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
