export const name="vpn_key";
export const id="dl_af01112cebf74ccaa69e";
export const url=new URL("../icons/V/vpn_key.svg?v=cb54ccdbdcc132c64e7a9374f0a0e4c47b99b131872d76cc071b05777e685cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
