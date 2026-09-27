export const name="traffic_jam";
export const id="dl_63f054a9a872e7c02fd3";
export const url=new URL("../icons/traffic_jam.svg?v=3a8e8c86a1e9a18b37b0c6732238a28c6aa09bd6bba29dd9f4dafba584ae8eb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
