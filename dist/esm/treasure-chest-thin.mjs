export const name="treasure-chest-thin";
export const id="dl_f5619bdaa1ef43208cbe";
export const url=new URL("../icons/T/treasure-chest-thin.svg?v=f7920d37f0a77acbd463c5ecff97e3c8e30620aa286a1349766cb24b92decfc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
