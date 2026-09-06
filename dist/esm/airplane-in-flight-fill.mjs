export const name="airplane-in-flight-fill";
export const id="dl_584c4ffd5c5a4246badf";
export const url=new URL("../icons/airplane-in-flight-fill.svg?v=1d7972858f5a681ec69c682eee849616675c325e386cbc452212f5ddced12520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
