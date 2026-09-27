export const name="vpn_key_alert";
export const id="dl_5d88b2fd40dde0c42a22";
export const url=new URL("../icons/vpn_key_alert.svg?v=318b995cdca7a6702fa335774c558d0231320a4efe39fd1a079756a9f5c6cf9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
