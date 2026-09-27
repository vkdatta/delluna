export const name="nest_thermostat_e_eu";
export const id="dl_ec2d77966b03005d7fd5";
export const url=new URL("../icons/nest_thermostat_e_eu.svg?v=bf511e65b285c1375ef31c8ca0a995b1471713e600b17c661617bfdff05e7cf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
