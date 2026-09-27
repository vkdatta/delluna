export const name="paragliding";
export const id="dl_64cf223e035779efbde9";
export const url=new URL("../icons/paragliding.svg?v=198425adc54edd433eed1be1957ea6da1447f780ade3f1256f8a41a4199953e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
