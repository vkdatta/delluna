export const name="approval";
export const id="dl_76df322e3813bdcf72be";
export const url=new URL("../icons/approval.svg?v=4accccbb03b6d9b86892c9da0dc6c168d2eb567ae9e93b9fd303569b24aa315b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
