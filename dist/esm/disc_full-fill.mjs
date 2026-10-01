export const name="disc_full-fill";
export const id="dl_40a2285a3dc71e4f547d";
export const url=new URL("../icons/disc_full-fill.svg?v=b26ed32e72bb0e6051b8993159a8868096e0120767e17588a10ff89c2e4e984e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
