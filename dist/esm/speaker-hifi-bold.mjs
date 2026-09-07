export const name="speaker-hifi-bold";
export const id="dl_4e7fdb67a79a46849b90";
export const url=new URL("../icons/S/speaker-hifi-bold.svg?v=a548cb06871077652a366454da045206c3664c5342682015ad9f502d7d20329f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
