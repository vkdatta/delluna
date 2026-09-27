export const name="circle-half-light";
export const id="dl_56ed74bf945b41768f90";
export const url=new URL("../icons/circle-half-light.svg?v=a3e854e3962fa301990cee02b131d94d0356f2d5ed06ce5107f9297f4738f1fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
