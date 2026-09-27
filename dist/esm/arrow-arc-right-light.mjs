export const name="arrow-arc-right-light";
export const id="dl_2718246905c14f6abd93";
export const url=new URL("../icons/arrow-arc-right-light.svg?v=61d4a14ad88e544e44a19e23d205984b37f7940758435678a64521b19a405fbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
