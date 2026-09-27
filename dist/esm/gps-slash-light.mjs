export const name="gps-slash-light";
export const id="dl_6ad74584de094860958d";
export const url=new URL("../icons/gps-slash-light.svg?v=f41ad294b2a23861c8266b27ac6e245725877b7452f0994d13d473b71d8321e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
