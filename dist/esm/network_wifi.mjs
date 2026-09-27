export const name="network_wifi";
export const id="dl_4fdefff082c7ff01b120";
export const url=new URL("../icons/network_wifi.svg?v=1063bf7f3ee13177c56f4bd083515f3f10aed4c92e3087fc55e5932c5f0e5fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
