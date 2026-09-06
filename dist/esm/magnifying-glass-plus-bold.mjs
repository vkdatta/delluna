export const name="magnifying-glass-plus-bold";
export const id="dl_e4ee422d94eb4e128c89";
export const url=new URL("../icons/magnifying-glass-plus-bold.svg?v=a385d91c98f91a14473dac23d5279f4be2177abb40006c9b086981b4be3d47ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
