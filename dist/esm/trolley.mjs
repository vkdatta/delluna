export const name="trolley";
export const id="dl_be31f4efdef3d5e7e84d";
export const url=new URL("../icons/trolley.svg?v=c080f89ed9aa69872b2880436bcce7060a623c9f3256c1023601e18ebc966311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
