export const name="humidity_high";
export const id="dl_2a1e8f9c9d45d51eefe0";
export const url=new URL("../icons/humidity_high.svg?v=81a1f8795cce56a36247f8528f8b2552259b3f64eae7c569dea5159645d0fde8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
