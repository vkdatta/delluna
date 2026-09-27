export const name="app_registration";
export const id="dl_dddf4c4484a4b46034a7";
export const url=new URL("../icons/app_registration.svg?v=6468d3725861ff05d4a992e0531836494f8ed1d1d6bf1d0d23c7622293f3861a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
