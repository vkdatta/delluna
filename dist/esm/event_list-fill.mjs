export const name="event_list-fill";
export const id="dl_e5ee07888e036affa6aa";
export const url=new URL("../icons/event_list-fill.svg?v=ea2d6575952ade43308c2ddb045394db63398da247d1cabd20cea81fd54bc0ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
