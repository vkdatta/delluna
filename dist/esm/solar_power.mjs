export const name="solar_power";
export const id="dl_6fdb059d71cd43818e31";
export const url=new URL("../icons/S/solar_power.svg?v=63cbfa47ff90f208e5ffcf6038d924b8716ebd72ce5d3fb3b071895511576d76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
