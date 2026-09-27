export const name="basket-light";
export const id="dl_aa8b318d3e3b42c39bf8";
export const url=new URL("../icons/basket-light.svg?v=2155fc8763ff589cfe2d0255b29655cf93f9b577497fd00e6a323f3925b6c150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
