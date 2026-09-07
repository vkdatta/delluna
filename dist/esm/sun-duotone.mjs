export const name="sun-duotone";
export const id="dl_b26b876c53b74d859325";
export const url=new URL("../icons/S/sun-duotone.svg?v=6a180204ea92f2501de811908395e6dad15ddf2ca0a577f420fad8bef0b4c5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
