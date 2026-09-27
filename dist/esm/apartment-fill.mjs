export const name="apartment-fill";
export const id="dl_e0edf33b4471b6e37b70";
export const url=new URL("../icons/apartment-fill.svg?v=420d529420a9a7af6a889dac2c74bfe201d6b3dabc1e8797147075b3d62beb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
