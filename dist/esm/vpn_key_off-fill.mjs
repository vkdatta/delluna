export const name="vpn_key_off-fill";
export const id="dl_72f130c4acee701495bc";
export const url=new URL("../icons/vpn_key_off-fill.svg?v=6d708d30f65b743414cb4106f9c449d2efce0813449073d4dc408f9821d6b608",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
