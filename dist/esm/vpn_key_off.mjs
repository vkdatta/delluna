export const name="vpn_key_off";
export const id="dl_45e2885420773f86d43d";
export const url=new URL("../icons/vpn_key_off.svg?v=9cc4d5c9a36191d398c1f1bf4ad8ddd80c5cff9e9cc18a4781a3bc8fcc33fc7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
