export const name="speaker-simple-low-fill";
export const id="dl_41c1d247fd493d94957a";
export const url=new URL("../icons/speaker-simple-low-fill.svg?v=e1d8fcb439e7cdb8c7e208d4478fcd058aed4be5dbc6c3a2e1c58ba26557f801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
