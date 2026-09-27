export const name="pallet";
export const id="dl_1201bd8edd71ae44290d";
export const url=new URL("../icons/pallet.svg?v=2f1081883ef91a65923d515a90b127cff071a1b0745e63cded22dd4cb2d0b04d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
