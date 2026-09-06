export const name="credit-card-thin";
export const id="dl_9491f9ec7308426c8ccf";
export const url=new URL("../icons/credit-card-thin.svg?v=154b0bb73907eac86ffcd5485bd9b259cf6e096ff859ae4bada8f46ff58d4168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
