export const name="account_circle_off";
export const id="dl_1dbabb93771b10d3db12";
export const url=new URL("../icons/account_circle_off.svg?v=b398847ace94d6d2f9002bfc9a62e267666efb349b418923c5fb503c6b229072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
