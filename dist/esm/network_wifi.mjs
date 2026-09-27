export const name="network_wifi";
export const id="dl_fefe10c2a60b7e5e3ced";
export const url=new URL("../icons/network_wifi.svg?v=a64101a2b0f1f20ff92f6f5f0466c2b74145d3796cfe479d1cbbd4cf80a0aa07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
