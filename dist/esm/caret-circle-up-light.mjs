export const name="caret-circle-up-light";
export const id="dl_f98fdc2317214e49a421";
export const url=new URL("../icons/caret-circle-up-light.svg?v=741ef435ae3026c68f55240dcc2e68a3573d8086362392038d1561eb6be5ce54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
