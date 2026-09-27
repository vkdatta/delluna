export const name="boat_railway";
export const id="dl_ea625f25e66b1559bfb0";
export const url=new URL("../icons/boat_railway.svg?v=e406389c951d2f30e977b38ad91575edf5815aa281ec0256cd08075860c1210c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
