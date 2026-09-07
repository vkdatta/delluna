export const name="number-circle-five-duotone";
export const id="dl_7e4b9055b0ca4e72b604";
export const url=new URL("../icons/number-circle-five-duotone.svg?v=c483a8fc046ca07500c9e510ebc784e29f507a31aa9e415d043c28996e5c2700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
