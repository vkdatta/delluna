export const name="cardholder-bold";
export const id="dl_9996fd3f48bc45f58f27";
export const url=new URL("../icons/cardholder-bold.svg?v=a83eb9e58bd34c59e65713f2efa836746c3b79213eb308d7ee14f797bd792e5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
