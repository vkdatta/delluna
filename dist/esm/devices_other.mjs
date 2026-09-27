export const name="devices_other";
export const id="dl_5b8a4544b3ed1dcf3ad0";
export const url=new URL("../icons/devices_other.svg?v=c7e9a889c61dad4ee52aa70ac7831deb27e85dade556c1154bb68e746c91640d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
