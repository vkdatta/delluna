export const name="lucid_3-music-3";
export const id="dl_4b07387d1e874b00be03";
export const url=new URL("../icons/lucid_3-music-3.svg?v=bcd07e2c249470b26dd08c06c2197899187c34382e6093a04a5106b0be475f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
