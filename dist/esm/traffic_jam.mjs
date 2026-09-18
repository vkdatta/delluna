export const name="traffic_jam";
export const id="dl_555134f3e12645eaa098";
export const url=new URL("../icons/T/traffic_jam.svg?v=e06a00fb408c2e79d07ecc32e54413938c2392f0fc7ca3a3d5ff82bd075c2df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
