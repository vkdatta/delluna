export const name="game_bumper_left";
export const id="dl_90b5bcc6575b41879d2e";
export const url=new URL("../icons/game_bumper_left.svg?v=4291cdcdfaeacce2e1284135601e63caea1c67a2765a621c8e697d8a12a1d2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
