export const name="shield_toggle";
export const id="dl_cf9af2cac10b766862a2";
export const url=new URL("../icons/shield_toggle.svg?v=be4cffda8da159d2c5fe22efb3498040c728a7b144e00a95dc6e27d56a4d5c68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
