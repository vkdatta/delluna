export const name="twitter-logo-bold";
export const id="dl_66ebc1b9c9454a1e9711";
export const url=new URL("../icons/T/twitter-logo-bold.svg?v=ec8ece75d3475dfc76789b60b02630f9c4d3d31f9692eb2d075b2ecf99693c6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
