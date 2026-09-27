export const name="hurricane-light";
export const id="dl_00609887ed364a73bcf9";
export const url=new URL("../icons/hurricane-light.svg?v=b4e41184b5e1dd95e1f29012759c0278bb0498ad386718893605a9cbdca101ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
