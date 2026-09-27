export const name="skip-forward-circle-bold";
export const id="dl_9bc9f547b368066de2e4";
export const url=new URL("../icons/skip-forward-circle-bold.svg?v=4ee439cbcdf887889cc777ac444baeed8a4b94d252db65f3a5ddbbbbe42d4752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
