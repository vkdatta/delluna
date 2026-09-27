export const name="bell-simple-slash";
export const id="dl_08e09f0b9b904585bea4";
export const url=new URL("../icons/bell-simple-slash.svg?v=6d95546bb752e1b9f00576043cfa96450063f355873ece062673240e4b092a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
