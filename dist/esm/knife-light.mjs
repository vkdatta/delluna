export const name="knife-light";
export const id="dl_56fbbd22139e4a078724";
export const url=new URL("../icons/knife-light.svg?v=e9f8c9952576659594f660c87363a9b4be9e457c6bac787d1495c9b205b4cefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
