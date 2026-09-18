export const name="offline_pin";
export const id="dl_000048a32d914eddab0c";
export const url=new URL("../icons/offline_pin.svg?v=400f5d1f294d8706dd48eba0294e8843f06f56773800a98e9d9402d49480db7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
