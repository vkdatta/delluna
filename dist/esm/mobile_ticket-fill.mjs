export const name="mobile_ticket-fill";
export const id="dl_469161571dd90e68a5d7";
export const url=new URL("../icons/mobile_ticket-fill.svg?v=fa140260f1828af4dee419c9bbe75031b3c90214ce150a99b0f36f630e068167",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
