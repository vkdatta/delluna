export const name="lucid_1-alarm-clock-minus";
export const id="dl_b4b1ee85ae5a47e9b203";
export const url=new URL("../icons/lucid_1-alarm-clock-minus.svg?v=636f2f53a2c0c94be1f0c70ab10395de5ec063648424d3948f39fc41c4c00811",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
