export const name="lucid_3-pen-off";
export const id="dl_f83169a6f4134d0cbf7a";
export const url=new URL("../icons/lucid_3-pen-off.svg?v=76d4a8da2c5ed27caf326c9c74a1e833316f150399947cde0b29359da0c50fda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
