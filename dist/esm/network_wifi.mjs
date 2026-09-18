export const name="network_wifi";
export const id="dl_4b7d718bd88b4197b1b2";
export const url=new URL("../icons/N/network_wifi.svg?v=07924a3dde6e7294602bed035e27e92ea61c48919fe8566047c8828e7d977977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
