export const name="bus_map_pin";
export const id="dl_94e0f479779142a7b9db";
export const url=new URL("../icons/B/bus_map_pin.svg?v=ce3826ede2c06c2040044f8d0b44802606b2096382da8e344fea6a91c71dc7c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
