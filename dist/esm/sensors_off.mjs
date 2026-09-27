export const name="sensors_off";
export const id="dl_194c085171f54dd91350";
export const url=new URL("../icons/material_symbols/sensors_off.svg?v=b22506720cdb2ecec916cc63748658637f1730544e542a1dd95baf9263f3e05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
