export const name="person_heart-fill";
export const id="dl_0011f98725d92083bec6";
export const url=new URL("../icons/person_heart-fill.svg?v=ff3be9f947676892c7d1a2e0a97a71da77193c10b647415cedee47b6a9c4310b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
