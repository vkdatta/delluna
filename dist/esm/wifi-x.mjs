export const name="wifi-x";
export const id="dl_681dde9cd73551c669dd";
export const url=new URL("../icons/wifi-x.svg?v=65bb7f75f4897aa2671caa1b5eab8d04788d3af145aa8b341923c2be825e0c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
