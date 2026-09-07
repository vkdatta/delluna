export const name="waveform-fill";
export const id="dl_bacd009addfb4f24934d";
export const url=new URL("../icons/W/waveform-fill.svg?v=fbbca82dbcc988184e314a671ac08517b4099540ab97605ae186998d9c0d3187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
