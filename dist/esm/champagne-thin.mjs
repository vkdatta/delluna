export const name="champagne-thin";
export const id="dl_cb816a0021d44b6996e7";
export const url=new URL("../icons/champagne-thin.svg?v=db15558a92d796ddc0d87c6e48165c0a2b3fa1214431887e2b328eb9fd35c092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
