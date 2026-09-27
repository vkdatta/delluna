export const name="local_pizza-fill";
export const id="dl_094c364f711d4a718f07";
export const url=new URL("../icons/local_pizza-fill.svg?v=446238b72f9791ff4025fd64df9103b5eb52b1d898e00540f036bafa34ad899d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
