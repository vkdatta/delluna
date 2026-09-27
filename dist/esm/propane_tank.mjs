export const name="propane_tank";
export const id="dl_82afe01b277d583befdc";
export const url=new URL("../icons/propane_tank.svg?v=69b6a96a1216451958a1abfc285143b93a1d4d39fdb65b6180b4d57394e5c1db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
