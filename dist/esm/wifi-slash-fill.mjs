export const name="wifi-slash-fill";
export const id="dl_e1268dca58249543b954";
export const url=new URL("../icons/wifi-slash-fill.svg?v=d1cc62386d871e803caebdeda5e7f53c958ec3b935e596e3b6596b5a09facf60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
