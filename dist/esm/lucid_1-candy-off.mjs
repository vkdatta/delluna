export const name="lucid_1-candy-off";
export const id="dl_fddcab5393b5434598c0";
export const url=new URL("../icons/lucid_1-candy-off.svg?v=5b88e7a9a04323fb5752043798878c99c5e4d96f848dd0c517d82d131891ebeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
