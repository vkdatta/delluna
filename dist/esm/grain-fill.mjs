export const name="grain-fill";
export const id="dl_3c232e626cec288dbf9b";
export const url=new URL("../icons/grain-fill.svg?v=9dd709f9d26fec5254618f686b951830e18c6f07ccab812c77cefa81615cd657",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
