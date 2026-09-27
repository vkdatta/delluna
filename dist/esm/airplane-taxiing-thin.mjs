export const name="airplane-taxiing-thin";
export const id="dl_11119ecfaa504dd98eba";
export const url=new URL("../icons/airplane-taxiing-thin.svg?v=2e0e74a7e544d90c8835e6447506c11b522e722870387e790463ce7f64b27fdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
