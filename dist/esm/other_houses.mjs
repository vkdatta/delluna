export const name="other_houses";
export const id="dl_066cf16bd256cfb8a34e";
export const url=new URL("../icons/other_houses.svg?v=d25ffc3a990975243fb92e6021cda3d440e5e162c618c5c104b16d46ffca73a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
