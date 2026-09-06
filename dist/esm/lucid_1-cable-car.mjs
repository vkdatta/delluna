export const name="lucid_1-cable-car";
export const id="dl_92b37ed0c2f34bc4acd9";
export const url=new URL("../icons/lucid_1-cable-car.svg?v=d18a553d850622f0e5f7d0b682e06be48a4e9670993595b59f6a375153a95663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
