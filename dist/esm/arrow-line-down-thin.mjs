export const name="arrow-line-down-thin";
export const id="dl_9205f9072b9e497fa356";
export const url=new URL("../icons/arrow-line-down-thin.svg?v=97ba91c77f6047992a57761aaaa30a535e7c03872effd9564a35ebac42f436c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
